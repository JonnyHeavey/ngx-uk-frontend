import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

/**
 * GovScot Back to Top Component
 *
 * A link that allows users to navigate back to the top of the page with a single click.
 * The link improves navigation for users on long pages of content and on mobile devices.
 *
 * @example
 * ```html
 * <ngx-govscot-back-to-top />
 * ```
 *
 * @example
 * ```html
 * <ngx-govscot-back-to-top
 *   buttonText="Return to top"
 *   scrollThreshold="300" />
 * ```
 */
@Component({
  selector: 'ngx-govscot-back-to-top',
  templateUrl: './back-to-top.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotBackToTopComponent implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);

  /** Scroll threshold in pixels before button appears */
  readonly scrollThreshold = input<number>(200);

  /** Aria label for the button */
  readonly ariaLabel = input<string>('Back to top of page');

  /** Text content for the button */
  readonly buttonText = input<string>('Back to top');

  /** Signal to track if the button should be visible */
  readonly isVisible = signal<boolean>(false);

  ngOnInit(): void {
    const window = this.document.defaultView;
    if (!window) return;

    fromEvent(window, 'scroll')
      .pipe(
        throttleTime(16), // ~60fps for smooth updates
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        this.isVisible.set(scrollY > this.scrollThreshold());
      });
  }

  /**
   * Scroll to the top of the page with smooth animation
   */
  scrollToTop(): void {
    const window = this.document.defaultView;
    if (!window) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
}
