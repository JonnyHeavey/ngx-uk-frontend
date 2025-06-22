import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotFeatureHeaderComponent } from './feature-header.component';

@Component({
  template: `
    <ngx-govscot-feature-header
      [title]="title"
      [content]="content"
      [imageSrc]="imageSrc"
      [imageAlt]="imageAlt"
      [imageWidth]="imageWidth"
      [imageHeight]="imageHeight"
      [background]="background"
      [fullWidth]="fullWidth"
      [wideText]="wideText"
      [topAligned]="topAligned"
      [noPadding]="noPadding"
      [imageScale]="imageScale"
      [aspectRatio]="aspectRatio"
    >
    </ngx-govscot-feature-header>
  `,
  imports: [GovScotFeatureHeaderComponent],
})
class TestHostComponent {
  title = 'Test Feature Header';
  content = 'Test content description';
  imageSrc = 'test-image.jpg';
  imageAlt = 'Test image';
  imageWidth = 400;
  imageHeight = 300;
  background: any = 'default';
  fullWidth = false;
  wideText = false;
  topAligned = false;
  noPadding = false;
  imageScale: any = 'contain';
  aspectRatio: any = undefined;
}

describe('GovScotFeatureHeaderComponent', () => {
  let component: GovScotFeatureHeaderComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovScotFeatureHeaderComponent, TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    component = fixture.debugElement.children[0].componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    const titleElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__title',
    );
    expect(titleElement.textContent.trim()).toBe('Test Feature Header');
  });

  it('should display content when provided', () => {
    const contentElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__primary p',
    );
    expect(contentElement.textContent.trim()).toBe('Test content description');
  });

  it('should not display content when not provided', () => {
    hostComponent.content = '';
    fixture.detectChanges();

    const contentElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__primary p',
    );
    expect(contentElement).toBeFalsy();
  });

  it('should display image when imageSrc is provided', () => {
    const imageElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__image',
    );
    expect(imageElement).toBeTruthy();
    expect(imageElement.src).toContain('test-image.jpg');
    expect(imageElement.alt).toBe('Test image');
  });

  it('should not display image section when imageSrc is not provided', () => {
    hostComponent.imageSrc = '';
    hostComponent.imageWidth = 0;
    hostComponent.imageHeight = 0;
    fixture.detectChanges();

    const secondaryElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__secondary',
    );
    expect(secondaryElement).toBeFalsy();
  });

  it('should apply default background classes', () => {
    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain('ds_feature-header');
    expect(headerElement.classList).not.toContain(
      'ds_feature-header--background-secondary',
    );
    expect(headerElement.classList).not.toContain(
      'ds_feature-header--background-tertiary',
    );
    expect(headerElement.classList).not.toContain(
      'ds_feature-header--background',
    );
  });

  it('should apply secondary background class', () => {
    hostComponent.background = 'secondary';
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain(
      'ds_feature-header--background-secondary',
    );
  });

  it('should apply tertiary background class', () => {
    hostComponent.background = 'tertiary';
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain(
      'ds_feature-header--background-tertiary',
    );
  });

  it('should apply brand background class', () => {
    hostComponent.background = 'brand';
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain('ds_feature-header--background');
  });

  it('should apply full width layout with wrapper', () => {
    hostComponent.fullWidth = true;
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    const wrapperElement = fixture.nativeElement.querySelector('.ds_wrapper');

    expect(headerElement.classList).toContain('ds_feature-header--fullwidth');
    expect(wrapperElement).toBeTruthy();
  });

  it('should apply wide text class', () => {
    hostComponent.wideText = true;
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain('ds_feature-header--wide');
  });

  it('should apply top aligned class', () => {
    hostComponent.topAligned = true;
    fixture.detectChanges();

    const headerElement = fixture.nativeElement.querySelector('header');
    expect(headerElement.classList).toContain('ds_feature-header--top');
  });

  it('should apply no padding class to secondary section', () => {
    hostComponent.noPadding = true;
    fixture.detectChanges();

    const secondaryElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__secondary',
    );
    expect(secondaryElement.classList).toContain(
      'ds_feature-header__secondary--no-padding',
    );
  });

  it('should apply cover image scale class', () => {
    hostComponent.imageScale = 'cover';
    fixture.detectChanges();

    const secondaryElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__secondary',
    );
    expect(secondaryElement.classList).toContain(
      'ds_feature-header__secondary--cover',
    );
  });

  it('should use aspect box with square ratio', () => {
    hostComponent.aspectRatio = 'square';
    fixture.detectChanges();

    const aspectBoxElement =
      fixture.nativeElement.querySelector('.ds_aspect-box');
    const aspectBoxImage = fixture.nativeElement.querySelector(
      '.ds_aspect-box__inner',
    );

    expect(aspectBoxElement).toBeTruthy();
    expect(aspectBoxElement.classList).toContain('ds_aspect-box--square');
    expect(aspectBoxImage).toBeTruthy();
  });

  it('should use aspect box with 4:3 ratio', () => {
    hostComponent.aspectRatio = '4:3';
    fixture.detectChanges();

    const aspectBoxElement =
      fixture.nativeElement.querySelector('.ds_aspect-box');
    expect(aspectBoxElement.classList).toContain('ds_aspect-box--4-3');
  });

  it('should use aspect box with 3:2 ratio', () => {
    hostComponent.aspectRatio = '3:2';
    fixture.detectChanges();

    const aspectBoxElement =
      fixture.nativeElement.querySelector('.ds_aspect-box');
    expect(aspectBoxElement.classList).toContain('ds_aspect-box--3-2');
  });

  it('should use aspect box with 16:9 ratio', () => {
    hostComponent.aspectRatio = '16:9';
    fixture.detectChanges();

    const aspectBoxElement =
      fixture.nativeElement.querySelector('.ds_aspect-box');
    expect(aspectBoxElement.classList).toContain('ds_aspect-box--16-9');
  });

  it('should not use aspect box when no aspect ratio is set', () => {
    const aspectBoxElement =
      fixture.nativeElement.querySelector('.ds_aspect-box');
    const regularImage = fixture.nativeElement.querySelector(
      '.ds_feature-header__image',
    );

    expect(aspectBoxElement).toBeFalsy();
    expect(regularImage).toBeTruthy();
  });

  it('should handle title-only configuration', () => {
    hostComponent.content = '';
    hostComponent.imageSrc = '';
    hostComponent.imageWidth = 0;
    hostComponent.imageHeight = 0;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__title',
    );
    const contentElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__primary p',
    );
    const secondaryElement = fixture.nativeElement.querySelector(
      '.ds_feature-header__secondary',
    );

    expect(titleElement.textContent.trim()).toBe('Test Feature Header');
    expect(contentElement).toBeFalsy();
    expect(secondaryElement).toBeFalsy();
  });
});
