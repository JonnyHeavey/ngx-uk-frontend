import { Directive, input } from '@angular/core';

export type Phase = 'alpha' | 'beta';

/**
 * Base directive for phase banner components across different design systems.
 * Provides common functionality for managing phase state and content.
 */
@Directive()
export abstract class PhaseBannerDirective {
  /** The phase of the service. Can be 'alpha' or 'beta'. Defaults to 'beta'. */
  readonly phase = input<Phase>('beta');
}
