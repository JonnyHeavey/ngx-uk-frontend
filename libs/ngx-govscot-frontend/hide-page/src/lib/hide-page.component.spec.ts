import { DOCUMENT } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GovScotHidePageComponent } from './hide-page.component';

describe('GovScotHidePageComponent', () => {
  let component: GovScotHidePageComponent;
  let fixture: ComponentFixture<GovScotHidePageComponent>;
  let mockDocument: any;
  let mockWindow: any;
  let mockHistory: any;

  beforeEach(async () => {
    // Create comprehensive mocks
    mockHistory = {
      length: 5,
      back: jest.fn(),
      replaceState: jest.fn(),
      pushState: jest.fn(),
    };

    mockWindow = {
      open: jest.fn().mockReturnValue(null),
      location: {
        replace: jest.fn(),
      },
      history: mockHistory,
    };

    // Create a more complete document mock that includes the methods Angular testing needs
    const realDocument = document;
    mockDocument = {
      ...realDocument, // Include real document methods for DOM operations
      defaultView: mockWindow,
      querySelectorAll: realDocument.querySelectorAll.bind(realDocument),
      querySelector: realDocument.querySelector.bind(realDocument),
      getElementById: realDocument.getElementById.bind(realDocument),
      createElement: realDocument.createElement.bind(realDocument),
      createTextNode: realDocument.createTextNode.bind(realDocument),
      body: realDocument.body,
      head: realDocument.head,
    };

    await TestBed.configureTestingModule({
      imports: [GovScotHidePageComponent],
      providers: [{ provide: DOCUMENT, useValue: mockDocument }],
    }).compileComponents();

    fixture = TestBed.createComponent(GovScotHidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Component Properties', () => {
    it('should have default redirectUrl', () => {
      expect(component.redirectUrl()).toBe('https://www.google.com');
    });

    it('should have default newTabUrl', () => {
      expect(component.newTabUrl()).toBe('https://bbc.co.uk/weather');
    });

    it('should have default classes', () => {
      expect(component.classes()).toBe('');
    });

    it('should have default ariaLabel', () => {
      expect(component.ariaLabel()).toBe('Hide this page quickly and safely');
    });

    it('should have default showEscText', () => {
      expect(component.showEscText()).toBe(true);
    });

    it('should accept custom redirectUrl', () => {
      fixture.componentRef.setInput('redirectUrl', 'https://example.com');
      expect(component.redirectUrl()).toBe('https://example.com');
    });

    it('should accept custom newTabUrl', () => {
      fixture.componentRef.setInput('newTabUrl', 'https://news.bbc.co.uk');
      expect(component.newTabUrl()).toBe('https://news.bbc.co.uk');
    });

    it('should accept custom classes', () => {
      fixture.componentRef.setInput('classes', 'my-custom-class');
      expect(component.classes()).toBe('my-custom-class');
    });

    it('should accept custom ariaLabel', () => {
      fixture.componentRef.setInput('ariaLabel', 'Custom aria label');
      expect(component.ariaLabel()).toBe('Custom aria label');
    });

    it('should accept custom showEscText', () => {
      fixture.componentRef.setInput('showEscText', false);
      expect(component.showEscText()).toBe(false);
    });
  });

  describe('buttonClasses computed signal', () => {
    it('should return default classes when no custom classes provided', () => {
      expect(component.buttonClasses()).toBe(
        'ds_hide-page__button ds_button js-hide-page ',
      );
    });

    it('should include custom classes when provided', () => {
      fixture.componentRef.setInput('classes', 'my-custom-class');
      expect(component.buttonClasses()).toBe(
        'ds_hide-page__button ds_button js-hide-page my-custom-class',
      );
    });

    it('should update when classes input changes', () => {
      fixture.componentRef.setInput('classes', 'class1');
      expect(component.buttonClasses()).toBe(
        'ds_hide-page__button ds_button js-hide-page class1',
      );

      fixture.componentRef.setInput('classes', 'class2');
      expect(component.buttonClasses()).toBe(
        'ds_hide-page__button ds_button js-hide-page class2',
      );
    });
  });

  describe('Template Rendering', () => {
    it('should render the hide page button', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button).toBeTruthy();
      expect(button.textContent).toContain('Hide this page');
    });

    it('should render the escape key instruction', () => {
      const instruction = fixture.nativeElement.querySelector(
        '.ds_hide-page__text',
      );
      expect(instruction).toBeTruthy();
      expect(instruction.textContent).toContain('(Or press Esc key)');
    });

    it('should render visually hidden text for screen readers', () => {
      const hiddenText =
        fixture.nativeElement.querySelector('.visually-hidden');
      expect(hiddenText).toBeTruthy();
      expect(hiddenText.textContent).toContain(
        'Or press escape key to hide this page',
      );
    });

    it('should apply correct CSS classes to button', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.classList).toContain('ds_hide-page__button');
      expect(button.classList).toContain('ds_button');
      expect(button.classList).toContain('js-hide-page');
    });

    it('should apply custom classes to button when provided', () => {
      fixture.componentRef.setInput('classes', 'my-custom-class');
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.classList).toContain('my-custom-class');
    });

    it('should set correct aria-label on button', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe(
        'Hide this page quickly and safely',
      );
    });

    it('should set custom aria-label when provided', () => {
      fixture.componentRef.setInput('ariaLabel', 'Custom aria label');
      fixture.detectChanges();

      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('aria-label')).toBe('Custom aria label');
    });
  });

  describe('hidePage functionality', () => {
    it('should call hidePage when button is clicked', () => {
      const spy = jest.spyOn(component, 'hidePage' as any);

      const button = fixture.nativeElement.querySelector('button');
      button.click();

      expect(spy).toHaveBeenCalled();
    });

    it('should open new tab with default URL', () => {
      component['hidePage']();

      expect(mockWindow.open).toHaveBeenCalledWith(
        'https://bbc.co.uk/weather',
        '_blank',
      );
    });

    it('should redirect to default URL', () => {
      component['hidePage']();

      expect(mockWindow.location.replace).toHaveBeenCalledWith(
        'https://www.google.com',
      );
    });

    it('should open new tab with custom URL', () => {
      fixture.componentRef.setInput('newTabUrl', 'https://news.bbc.co.uk');

      component['hidePage']();

      expect(mockWindow.open).toHaveBeenCalledWith(
        'https://news.bbc.co.uk',
        '_blank',
      );
    });

    it('should redirect to custom URL', () => {
      fixture.componentRef.setInput('redirectUrl', 'https://example.com');

      component['hidePage']();

      expect(mockWindow.location.replace).toHaveBeenCalledWith(
        'https://example.com',
      );
    });

    it('should handle missing window gracefully', () => {
      mockDocument.defaultView = null;
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(jest.fn());

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Window not available, cannot perform hide page action',
      );
    });

    it('should handle window.open failure gracefully', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(jest.fn());
      mockWindow.open.mockImplementation(() => {
        throw new Error('Failed to open');
      });

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to complete hide page operation, redirecting only:',
        expect.any(Error),
      );
      expect(mockWindow.location.replace).toHaveBeenCalledWith(
        'https://www.google.com',
      );
    });

    it('should handle complete failure gracefully', () => {
      const consoleSpy = jest
        .spyOn(console, 'error')
        .mockImplementation(jest.fn());
      mockWindow.open.mockImplementation(() => {
        throw new Error('Failed to open');
      });
      mockWindow.location.replace.mockImplementation(() => {
        throw new Error('Failed to redirect');
      });

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Failed to redirect:',
        expect.any(Error),
      );
    });
  });

  describe('clearBrowserHistory functionality', () => {
    beforeEach(() => {
      // Reset mocks for each test
      jest.clearAllMocks();
    });

    it('should attempt to clear history when history has entries', () => {
      component['hidePage']();

      // Should call back() method to go back in history
      expect(mockHistory.back).toHaveBeenCalled();

      // Should call replaceState to overwrite history entry
      expect(mockHistory.replaceState).toHaveBeenCalledWith(
        null,
        '',
        'https://www.google.com',
      );

      // Should call pushState and replaceState for cleanup
      expect(mockHistory.pushState).toHaveBeenCalledWith(
        null,
        '',
        'https://www.google.com',
      );
    });

    it('should limit back navigation to prevent infinite loops', () => {
      mockHistory.length = 50; // Large history

      component['hidePage']();

      // Should not call back more than 10 times
      expect(mockHistory.back).toHaveBeenCalledTimes(10);
    });

    it('should handle history with no entries', () => {
      mockHistory.length = 1;

      component['hidePage']();

      // Should not call back() when history length is 1
      expect(mockHistory.back).not.toHaveBeenCalled();

      // Should still attempt other cleanup strategies
      expect(mockHistory.replaceState).toHaveBeenCalled();
    });

    it('should handle history.back() failures gracefully', () => {
      mockHistory.back.mockImplementation(() => {
        throw new Error('Back navigation failed');
      });

      component['hidePage']();

      // Should continue with other strategies even if back() fails
      expect(mockHistory.replaceState).toHaveBeenCalled();
      expect(mockHistory.pushState).toHaveBeenCalled();
    });

    it('should handle replaceState failures gracefully', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(jest.fn());
      mockHistory.replaceState.mockImplementation(() => {
        throw new Error('ReplaceState failed');
      });

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Could not replace history state:',
        expect.any(Error),
      );
      // Should continue with other strategies
      expect(mockHistory.pushState).toHaveBeenCalled();
    });

    it('should handle pushState failures gracefully', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(jest.fn());
      mockHistory.pushState.mockImplementation(() => {
        throw new Error('PushState failed');
      });

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Could not manipulate history state:',
        expect.any(Error),
      );
    });

    it('should handle complete history access failure', () => {
      const consoleSpy = jest
        .spyOn(console, 'warn')
        .mockImplementation(jest.fn());
      mockWindow.history = null;

      component['hidePage']();

      expect(consoleSpy).toHaveBeenCalledWith(
        'Could not access browser history:',
        expect.any(Error),
      );
    });
  });

  describe('Keyboard Events', () => {
    let hidepageSpy: jest.SpyInstance;

    beforeEach(() => {
      hidepageSpy = jest.spyOn(component, 'hidePage' as any);
    });

    it('should call hidePage when Escape key is pressed', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      const preventDefaultSpy = jest.spyOn(event, 'preventDefault');

      component.onEscapeKey(event);

      expect(preventDefaultSpy).toHaveBeenCalled();
      expect(hidepageSpy).toHaveBeenCalled();
    });

    it('should trigger escape key handler on document', () => {
      const event = new KeyboardEvent('keydown', { key: 'Escape' });
      jest.spyOn(event, 'preventDefault');

      document.dispatchEvent(event);

      expect(hidepageSpy).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper button type', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.type).toBe('button');
    });

    it('should have aria-label for assistive technology', () => {
      const button = fixture.nativeElement.querySelector('button');
      expect(button.getAttribute('aria-label')).toBeTruthy();
    });

    it('should have visually hidden text for screen readers', () => {
      const hiddenText =
        fixture.nativeElement.querySelector('.visually-hidden');
      expect(hiddenText).toBeTruthy();
      expect(hiddenText.classList).toContain('visually-hidden');
    });

    it('should have js-enabled-text classes for progressive enhancement', () => {
      const hiddenText =
        fixture.nativeElement.querySelector('.visually-hidden');
      const instructionText = fixture.nativeElement.querySelector(
        '.ds_hide-page__text',
      );

      expect(hiddenText.classList).toContain('js-enabled-text');
      expect(instructionText.classList).toContain('js-enabled-text');
    });
  });
});
