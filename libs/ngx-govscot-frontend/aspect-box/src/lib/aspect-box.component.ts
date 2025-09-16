import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

export type AspectRatio = '1:1' | '4:3' | '16:9' | '21:9';

@Component({
  selector: 'ngx-govscot-aspect-box',
  templateUrl: './aspect-box.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GovScotAspectBoxComponent {
  readonly aspectRatio = input<AspectRatio>('16:9');
  readonly classes = input<string>('');

  readonly aspectRatioClass = computed(() => {
    switch (this.aspectRatio()) {
      case '1:1':
        return 'ds_aspect-box--square';
      case '4:3':
        return 'ds_aspect-box--43';
      case '21:9':
        return 'ds_aspect-box--219';
      case '16:9':
      default:
        return ''; // 16:9 is the default, no modifier class needed
    }
  });
}
