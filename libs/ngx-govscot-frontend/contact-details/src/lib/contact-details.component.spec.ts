import { Component, viewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotContactDetailsComponent } from './contact-details.component';
import { GovScotContactItemDirective } from './contact-item.directive';

// Test host component to test the declarative API
@Component({
  template: `
    <ngx-govscot-contact-details
      [title]="title"
      [twoColumn]="twoColumn"
      [classes]="classes"
    >
      <ngx-govscot-contact-item label="Address" type="address">
        Scottish Government<br />
        St Andrew's House<br />
        Regent Road<br />
        Edinburgh<br />
        EH1 3DG
      </ngx-govscot-contact-item>
      <ngx-govscot-contact-item
        label="Email"
        type="email"
        href="email&#64;gov.scot"
      >
        email&#64;gov.scot
      </ngx-govscot-contact-item>
      <ngx-govscot-contact-item
        label="Phone"
        type="phone"
        additionalInfo="Main line is open 8am to 5pm"
      >
        0123 456 7000
      </ngx-govscot-contact-item>
    </ngx-govscot-contact-details>
  `,
  imports: [GovScotContactDetailsComponent, GovScotContactItemDirective],
})
class TestHostComponent {
  title = 'Contact';
  twoColumn = false;
  classes = '';
  component = viewChild.required(GovScotContactDetailsComponent);
}

@Component({
  template: `
    <ngx-govscot-contact-details title="Social Media Test">
      <ngx-govscot-contact-item
        label="Follow"
        type="social"
        href="https://facebook.com/test"
        icon="https://example.com/facebook.svg"
      >
        Facebook
      </ngx-govscot-contact-item>
      <ngx-govscot-contact-item
        label="Follow"
        type="social"
        href="https://x.com/test"
        additionalInfo="on X"
      >
        &#64;TestAccount
      </ngx-govscot-contact-item>
    </ngx-govscot-contact-details>
  `,
  imports: [GovScotContactDetailsComponent, GovScotContactItemDirective],
})
class SocialMediaTestComponent {
  component = viewChild.required(GovScotContactDetailsComponent);
}

@Component({
  template: `
    <ngx-govscot-contact-details title="Website Test">
      <ngx-govscot-contact-item
        label="Website"
        type="website"
        href="https://www.gov.scot"
      >
        www.gov.scot
      </ngx-govscot-contact-item>
    </ngx-govscot-contact-details>
  `,
  imports: [GovScotContactDetailsComponent, GovScotContactItemDirective],
})
class WebsiteTestComponent {
  component = viewChild.required(GovScotContactDetailsComponent);
}

describe('GovScotContactDetailsComponent', () => {
  let component: GovScotContactDetailsComponent;
  let fixture: ComponentFixture<GovScotContactDetailsComponent>;
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, GovScotContactDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotContactDetailsComponent);
    component = fixture.componentInstance;

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
  });

  it('should create', () => {
    TestBed.runInInjectionContext(() => {
      expect(component).toBeTruthy();
    });
  });

  it('should have default title of "Contact"', () => {
    TestBed.runInInjectionContext(() => {
      expect(component.title()).toBe('Contact');
    });
  });

  it('should accept custom title', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentRef.setInput('title', 'Get in Touch');
      expect(component.title()).toBe('Get in Touch');
    });
  });

  it('should have default twoColumn as false', () => {
    TestBed.runInInjectionContext(() => {
      expect(component.twoColumn()).toBe(false);
    });
  });

  it('should accept twoColumn input', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentRef.setInput('twoColumn', true);
      expect(component.twoColumn()).toBe(true);
    });
  });

  it('should have empty classes by default', () => {
    TestBed.runInInjectionContext(() => {
      expect(component.classes()).toBe('');
    });
  });

  it('should accept custom classes', () => {
    TestBed.runInInjectionContext(() => {
      fixture.componentRef.setInput('classes', 'custom-class');
      expect(component.classes()).toBe('custom-class');
    });
  });

  it('should render with base ds_contact-details class', () => {
    TestBed.runInInjectionContext(() => {
      hostFixture.detectChanges();

      const element = hostFixture.nativeElement.querySelector(
        '.ds_contact-details',
      );
      expect(element).toBeTruthy();
    });
  });

  it('should apply custom classes', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.classes = 'custom-class another-class';
      hostFixture.detectChanges();

      const element = hostFixture.nativeElement.querySelector(
        '.ds_contact-details',
      );
      expect(element.className).toContain('custom-class');
      expect(element.className).toContain('another-class');
    });
  });

  it('should render title correctly', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.title = 'Custom Title';
      hostFixture.detectChanges();

      const titleElement = hostFixture.nativeElement.querySelector(
        '.ds_contact-details__title',
      );
      expect(titleElement.textContent.trim()).toBe('Custom Title');
    });
  });

  it('should render contact items', () => {
    TestBed.runInInjectionContext(() => {
      hostFixture.detectChanges();

      const items = hostFixture.nativeElement.querySelectorAll(
        '.ds_contact-details__item',
      );
      expect(items.length).toBe(3);
    });
  });

  it('should render address item correctly', () => {
    TestBed.runInInjectionContext(() => {
      hostFixture.detectChanges();

      const addressItem = hostFixture.nativeElement.querySelector(
        '.ds_contact-details__item:first-child',
      );
      const dt = addressItem.querySelector('dt');
      const dd = addressItem.querySelector('dd');

      expect(dt.textContent.trim()).toBe('Address');
      expect(dd.innerHTML).toContain('Scottish Government<br>');
    });
  });

  it('should render email item with link', () => {
    TestBed.runInInjectionContext(() => {
      hostFixture.detectChanges();

      const emailItem = hostFixture.nativeElement.querySelector(
        '.ds_contact-details__item:nth-child(2)',
      );
      const link = emailItem.querySelector('a');

      expect(link).toBeTruthy();
      expect(link.href).toBe('mailto:email@gov.scot');
      expect(link.textContent.trim()).toBe('email@gov.scot');
      expect(link.className).toContain('ds_break-word');
    });
  });

  it('should render phone item with additional info', () => {
    TestBed.runInInjectionContext(() => {
      hostFixture.detectChanges();

      const phoneItem = hostFixture.nativeElement.querySelector(
        '.ds_contact-details__item:nth-child(3)',
      );
      const dd = phoneItem.querySelector('dd');

      expect(dd.textContent).toContain('0123 456 7000');
      expect(dd.textContent).toContain('Main line is open 8am to 5pm');
    });
  });

  it('should render social media items with icons', () => {
    TestBed.runInInjectionContext(() => {
      const socialFixture = TestBed.createComponent(SocialMediaTestComponent);
      socialFixture.detectChanges();

      const socialItem = socialFixture.nativeElement.querySelector(
        '.ds_contact-details__social-item',
      );
      const icon = socialItem.querySelector('.ds_contact-details__social-icon');
      const link = socialItem.querySelector('.ds_contact-details__social-link');

      expect(socialItem).toBeTruthy();
      expect(icon).toBeTruthy();
      expect(icon.src).toBe('https://example.com/facebook.svg');
      expect(link.href).toBe('https://facebook.com/test');
      expect(link.textContent.trim()).toBe('Facebook');
    });
  });

  it('should render social media items without icons', () => {
    TestBed.runInInjectionContext(() => {
      const socialFixture = TestBed.createComponent(SocialMediaTestComponent);
      socialFixture.detectChanges();

      const socialItems = socialFixture.nativeElement.querySelectorAll(
        '.ds_contact-details__social-item',
      );
      const secondSocialItem = socialItems[1]; // The one without icon
      const icon = secondSocialItem.querySelector(
        '.ds_contact-details__social-icon',
      );
      const link = secondSocialItem.querySelector(
        '.ds_contact-details__social-link',
      );
      const context = secondSocialItem.querySelector(
        '.ds_contact-details__social-context',
      );

      expect(icon).toBeFalsy();
      expect(link.href).toBe('https://x.com/test');
      expect(link.textContent.trim()).toBe('@TestAccount');
      expect(context.textContent.trim()).toBe('on X');
    });
  });

  it('should render website items with links', () => {
    TestBed.runInInjectionContext(() => {
      const websiteFixture = TestBed.createComponent(WebsiteTestComponent);
      websiteFixture.detectChanges();

      const websiteItem = websiteFixture.nativeElement.querySelector(
        '.ds_contact-details__item',
      );
      const link = websiteItem.querySelector('a');

      expect(link).toBeTruthy();
      expect(link.href).toBe('https://www.gov.scot/');
      expect(link.textContent.trim()).toBe('www.gov.scot');
    });
  });

  it('should render two-column layout when enabled', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.twoColumn = true;
      hostFixture.detectChanges();

      const grid = hostFixture.nativeElement.querySelector(
        '.ds_contact-details-grid',
      );
      const list = hostFixture.nativeElement.querySelector(
        '.ds_contact-details__list',
      );

      expect(grid).toBeTruthy();
      expect(list).toBeTruthy();
    });
  });

  it('should not render grid classes when twoColumn is false', () => {
    TestBed.runInInjectionContext(() => {
      hostComponent.twoColumn = false;
      hostFixture.detectChanges();

      const grid = hostFixture.nativeElement.querySelector(
        '.ds_contact-details-grid',
      );
      expect(grid).toBeFalsy();
    });
  });

  describe('computed properties', () => {
    describe('contactDetailsClasses', () => {
      it('should return base class by default', () => {
        TestBed.runInInjectionContext(() => {
          expect(component.contactDetailsClasses()).toBe('ds_contact-details');
        });
      });

      it('should include custom classes', () => {
        TestBed.runInInjectionContext(() => {
          fixture.componentRef.setInput('classes', 'custom-class');
          expect(component.contactDetailsClasses()).toBe(
            'ds_contact-details custom-class',
          );
        });
      });

      it('should handle multiple custom classes', () => {
        TestBed.runInInjectionContext(() => {
          fixture.componentRef.setInput('classes', 'class1 class2');
          expect(component.contactDetailsClasses()).toBe(
            'ds_contact-details class1 class2',
          );
        });
      });
    });

    describe('gridClasses', () => {
      it('should return empty string when twoColumn is false', () => {
        TestBed.runInInjectionContext(() => {
          fixture.componentRef.setInput('twoColumn', false);
          expect(component.gridClasses()).toBe('');
        });
      });

      it('should return grid class when twoColumn is true', () => {
        TestBed.runInInjectionContext(() => {
          fixture.componentRef.setInput('twoColumn', true);
          expect(component.gridClasses()).toBe('ds_contact-details-grid');
        });
      });
    });
  });
});

describe('GovScotContactItemDirective', () => {
  @Component({
    template: `
      <ngx-govscot-contact-item
        [label]="label"
        [type]="type"
        [href]="href"
        [icon]="icon"
        [additionalInfo]="additionalInfo"
      >
        Test Content
      </ngx-govscot-contact-item>
    `,
    imports: [GovScotContactItemDirective],
  })
  class TestDirectiveComponent {
    label = 'Test Label';
    type:
      | 'address'
      | 'email'
      | 'phone'
      | 'website'
      | 'social'
      | 'fax'
      | 'other' = 'other';
    href?: string;
    icon?: string;
    additionalInfo?: string;
    directive = viewChild.required(GovScotContactItemDirective);
  }

  let component: TestDirectiveComponent;
  let fixture: ComponentFixture<TestDirectiveComponent>;
  let directive: GovScotContactItemDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestDirectiveComponent);
    component = fixture.componentInstance;
    directive = component.directive();
    fixture.detectChanges();
  });

  describe('hasIcon computed signal', () => {
    it('should return true for social items with icon', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'social';
        component.icon = 'test-icon.svg';
        fixture.detectChanges();

        expect(directive.hasIcon()).toBe(true);
      });
    });

    it('should return false for social items without icon', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'social';
        component.icon = undefined;
        fixture.detectChanges();

        expect(directive.hasIcon()).toBe(false);
      });
    });

    it('should return false for non-social items', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.icon = 'test-icon.svg';
        fixture.detectChanges();

        expect(directive.hasIcon()).toBe(false);
      });
    });
  });

  describe('hasLink computed signal', () => {
    it('should return true for email items with href', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.href = 'test@example.com';
        fixture.detectChanges();

        expect(directive.hasLink()).toBe(true);
      });
    });

    it('should return true for website items with href', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'website';
        component.href = 'https://example.com';
        fixture.detectChanges();

        expect(directive.hasLink()).toBe(true);
      });
    });

    it('should return true for social items with href', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'social';
        component.href = 'https://social.example.com';
        fixture.detectChanges();

        expect(directive.hasLink()).toBe(true);
      });
    });

    it('should return false for items without href', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.href = undefined;
        fixture.detectChanges();

        expect(directive.hasLink()).toBe(false);
      });
    });

    it('should return false for non-linkable types', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'address';
        component.href = 'test';
        fixture.detectChanges();

        expect(directive.hasLink()).toBe(false);
      });
    });
  });

  describe('contactHref computed signal', () => {
    it('should add mailto: prefix for email items', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.href = 'test@example.com';
        fixture.detectChanges();

        expect(directive.contactHref()).toBe('mailto:test@example.com');
      });
    });

    it('should not add mailto: if already present', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.href = 'mailto:test@example.com';
        fixture.detectChanges();

        expect(directive.contactHref()).toBe('mailto:test@example.com');
      });
    });

    it('should return href as-is for non-email items', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'website';
        component.href = 'https://example.com';
        fixture.detectChanges();

        expect(directive.contactHref()).toBe('https://example.com');
      });
    });

    it('should return empty string when no href', () => {
      TestBed.runInInjectionContext(() => {
        component.type = 'email';
        component.href = undefined;
        fixture.detectChanges();

        expect(directive.contactHref()).toBe('');
      });
    });
  });
});
