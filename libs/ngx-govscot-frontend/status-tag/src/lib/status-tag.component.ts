import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type GovScotStatusTagColor =
  | 'grey'
  | 'green'
  | 'teal'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'yellow';

/**
 * This component implements the Scottish Government Design System status tag component.
 * Use the status tag component to show the status of something.
 *
 * Based on the official Scottish Government Design System specifications:
 * @see https://designsystem.gov.scot/components/status-tag
 */
@Component({
  selector: 'ngx-govscot-status-tag',
  imports: [NgClass],
  templateUrl: './status-tag.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class GovScotStatusTagComponent {
  /** The color of the status tag. Defaults to 'blue'. */
  readonly color = input<GovScotStatusTagColor>('blue');

  /** Additional CSS classes to apply to the status tag. */
  readonly extraClasses = input<string>('');

  /** Computed CSS classes based on the color and any extra classes provided. */
  readonly classes = computed(() => {
    return [this.colorClasses[this.color()], this.extraClasses()]
      .filter(Boolean)
      .join(' ')
      .trim();
  });

  private readonly colorClasses: Record<GovScotStatusTagColor, string> = {
    grey: 'ds_tag--grey',
    green: 'ds_tag--green',
    teal: 'ds_tag--teal',
    blue: 'ds_tag--blue',
    purple: 'ds_tag--purple',
    pink: 'ds_tag--pink',
    red: 'ds_tag--red',
    orange: 'ds_tag--orange',
    yellow: 'ds_tag--yellow',
  };
}
