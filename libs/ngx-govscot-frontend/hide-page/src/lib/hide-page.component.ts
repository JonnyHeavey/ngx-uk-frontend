import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  HostListener,
  inject,
  input,
} from '@angular/core';

/**
 * GovScot Hide Page Component
 *
 * A safety component that helps users exit a service, website or application
 * quickly and safely. Designed for victims of domestic abuse or other vulnerable
 * users viewing sensitive content.
 *
 * When triggered (by button click or Esc key):
 * 1. Opens new tab with specified URL
 * 2. Clears browser history entries
 * 3. Redirects current page to safe URL
 *
 * @example
 * ```html
 * <ngx-govscot-hide-page />
 * ```
 *
 * @example
 * ```html
 * <ngx-govscot-hide-page
 *   redirectUrl="https://example.com"
 *   newTabUrl="https://news.bbc.co.uk" />
 * ```
 */
@Component({
  selector: 'ngx-govscot-hide-page',
  template: `
    <div class="ds_hide-page">
      <button
        type="button"
        [class]="buttonClasses()"
        (click)="hidePage()"
        [attr.aria-label]="ariaLabel()"
      >
        <strong>Hide this page</strong>
        <span class="visually-hidden js-enabled-text">
          Or press escape key to hide this page
        </span>
      </button>
      <p class="ds_hide-page__text js-enabled-text">(Or press Esc key)</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotHidePageComponent {
  private readonly document = inject(DOCUMENT);

  /** URL to redirect the current tab to (default: Google homepage) */
  readonly redirectUrl = input<string>('https://www.google.com');

  /** URL to open in new tab (default: BBC Weather) */
  readonly newTabUrl = input<string>('https://bbc.co.uk/weather');

  /** Additional CSS classes for the container */
  readonly classes = input<string>('');

  /** Aria label for the button (for accessibility) */
  readonly ariaLabel = input<string>('Hide this page quickly and safely');

  /** Show the text instruction about Esc key */
  readonly showEscText = input<boolean>(true);

  /** Computed CSS classes for the button */
  readonly buttonClasses = computed(
    () => `ds_hide-page__button ds_button js-hide-page ${this.classes()}`,
  );

  /**
   * Listen for Escape key presses to trigger hide page functionality
   */
  @HostListener('document:keydown.escape', ['$event'])
  onEscapeKey(event: KeyboardEvent): void {
    event.preventDefault();
    this.hidePage();
  }

  /**
   * Hide the page by:
   * 1. Opening new tab with the specified URL
   * 2. Clearing browser history entries
   * 3. Redirecting current page to specified URL
   */
  protected hidePage(): void {
    const window = this.document.defaultView;

    if (!window) {
      console.warn('Window not available, cannot perform hide page action');
      return;
    }

    try {
      // Open new tab with the specified URL
      window.open(this.newTabUrl(), '_blank');

      // Clear browser history by going back in history first, then forward to remove current page
      this.clearBrowserHistory(window);

      // Replace current location to avoid adding to history
      window.location.replace(this.redirectUrl());
    } catch (error) {
      // Fallback: just redirect if operations fail
      console.warn(
        'Failed to complete hide page operation, redirecting only:',
        error,
      );
      try {
        window.location.replace(this.redirectUrl());
      } catch (redirectError) {
        console.error('Failed to redirect:', redirectError);
      }
    }
  }

  /**
   * Attempts to clear browser history entries using multiple strategies
   */
  private clearBrowserHistory(window: Window): void {
    try {
      const history = window.history;

      // Strategy 1: Try to clear multiple history entries by going back
      // This attempts to remove evidence of visiting sensitive pages
      if (history.length > 1) {
        // Go back as many steps as possible (max 10 to avoid infinite loops)
        const stepsToGoBack = Math.min(history.length - 1, 10);

        for (let i = 0; i < stepsToGoBack; i++) {
          try {
            history.back();
          } catch (backError) {
            // Some browsers may restrict this, continue with other strategies
            break;
          }
        }
      }

      // Strategy 2: Use replaceState to overwrite current history entry
      try {
        history.replaceState(null, '', this.redirectUrl());
      } catch (replaceError) {
        // Browser may restrict this operation
        console.warn('Could not replace history state:', replaceError);
      }

      // Strategy 3: Use pushState then replace to clean up
      try {
        history.pushState(null, '', this.redirectUrl());
        history.replaceState(null, '', this.redirectUrl());
      } catch (pushError) {
        // Browser may restrict this operation
        console.warn('Could not manipulate history state:', pushError);
      }
    } catch (error) {
      console.warn('Could not access browser history:', error);
    }
  }
}
