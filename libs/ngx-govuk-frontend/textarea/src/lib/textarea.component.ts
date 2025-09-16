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
import { CommonFormInputDirective } from '@ngx-uk-frontend/core/form-utils';
import { TextareaDirective } from '@ngx-uk-frontend/core/textarea';
import {
  inputCommonInputs,
  ValueAccessorDirective,
} from 'ngx-govuk-frontend/form-utils';

/**
 * This component implements the GOV.UK Design System textarea component.
 * It allows users to enter multiple lines of text.
 *
 * @see https://design-system.service.gov.uk/components/textarea/
 */
@Component({
  selector: 'ngx-govuk-textarea',
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    ValueAccessorDirective,
    { directive: CommonFormInputDirective, inputs: inputCommonInputs },
  ],
})
export class GovUKTextareaComponent
  extends TextareaDirective
  implements OnInit
{
  private readonly destroyRef = inject(DestroyRef);

  readonly showCharacterCount = input(false, { transform: booleanAttribute });

  private readonly currentLength: WritableSignal<number> = signal(0);
  private readonly remainingCharacters = computed(() => {
    const maxlength = this.maxlength();
    return maxlength === null || maxlength === undefined
      ? null
      : maxlength - this.currentLength();
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
      .subscribe((value) => this.currentLength.set(value.length));
  }
}
