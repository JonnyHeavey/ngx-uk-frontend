import { NgClass } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import {
  CommonFormInputDirective,
  inputCommonInputs,
  ValueAccessorDirective,
} from '@ngx-uk-frontend/core/form-utils';
import { TextareaDirective } from '@ngx-uk-frontend/core/textarea';

/**
 * This component implements the Scottish Government Design System textarea component.
 * It allows users to enter multiple lines of text with optional character count functionality.
 *
 * @see https://designsystem.gov.scot/components/textarea
 * @see https://designsystem.gov.scot/components/character-count
 */
@Component({
  selector: 'ngx-govscot-textarea',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovScotTextareaComponent
  extends TextareaDirective
  implements OnInit
{
  private readonly destroyRef = inject(DestroyRef);

  // Character count functionality
  readonly showCharacterCount = input(false, { transform: booleanAttribute });

  private readonly currentLength: WritableSignal<number> = signal(0);
  private readonly remainingCharacters = computed(() => {
    const maxlength = this.maxlength();
    return maxlength === null || maxlength === undefined
      ? null
      : maxlength - this.currentLength();
  });

  readonly isOverLimit = computed(() => {
    const remaining = this.remainingCharacters();
    return remaining !== null && remaining < 0;
  });

  readonly characterCountMessage = computed(() => {
    const remaining = this.remainingCharacters();

    if (
      this.maxlength() === null ||
      this.maxlength() === undefined ||
      remaining === null
    ) {
      return null;
    }

    if (remaining < 0) {
      const overLimit = Math.abs(remaining);
      return `You have ${overLimit} ${overLimit === 1 ? 'character' : 'characters'} too many`;
    }

    return `You have ${remaining} ${remaining === 1 ? 'character' : 'characters'} remaining`;
  });

  ngOnInit(): void {
    this.ngControl.valueChanges
      ?.pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => this.currentLength.set((value || '').length));
  }
}
