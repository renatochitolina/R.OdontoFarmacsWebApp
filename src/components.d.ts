/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'ionicons';
import '@ionic/core';

import {
  EventEmitter,
} from '@stencil/core';

declare global {

  namespace StencilComponents {
    interface OfButtonSpinner {
      'expand': "full" | "block";
      'fill': "clear" | "outline" | "solid";
      'onClick': any;
    }
  }

  interface HTMLOfButtonSpinnerElement extends StencilComponents.OfButtonSpinner, HTMLStencilElement {}

  var HTMLOfButtonSpinnerElement: {
    prototype: HTMLOfButtonSpinnerElement;
    new (): HTMLOfButtonSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'of-button-spinner': HTMLOfButtonSpinnerElement;
  }
  interface ElementTagNameMap {
    'of-button-spinner': HTMLOfButtonSpinnerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'of-button-spinner': JSXElements.OfButtonSpinnerAttributes;
    }
  }
  namespace JSXElements {
    export interface OfButtonSpinnerAttributes extends HTMLAttributes {
      'expand'?: "full" | "block";
      'fill'?: "clear" | "outline" | "solid";
      'onClick'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface OfFooter {

    }
  }

  interface HTMLOfFooterElement extends StencilComponents.OfFooter, HTMLStencilElement {}

  var HTMLOfFooterElement: {
    prototype: HTMLOfFooterElement;
    new (): HTMLOfFooterElement;
  };
  interface HTMLElementTagNameMap {
    'of-footer': HTMLOfFooterElement;
  }
  interface ElementTagNameMap {
    'of-footer': HTMLOfFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'of-footer': JSXElements.OfFooterAttributes;
    }
  }
  namespace JSXElements {
    export interface OfFooterAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface OfLazyImg {
      'alt': string;
      'src': string;
      'width': number;
    }
  }

  interface HTMLOfLazyImgElement extends StencilComponents.OfLazyImg, HTMLStencilElement {}

  var HTMLOfLazyImgElement: {
    prototype: HTMLOfLazyImgElement;
    new (): HTMLOfLazyImgElement;
  };
  interface HTMLElementTagNameMap {
    'of-lazy-img': HTMLOfLazyImgElement;
  }
  interface ElementTagNameMap {
    'of-lazy-img': HTMLOfLazyImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'of-lazy-img': JSXElements.OfLazyImgAttributes;
    }
  }
  namespace JSXElements {
    export interface OfLazyImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'onLazyImgloaded'?: (event: CustomEvent<HTMLImageElement>) => void;
      'src'?: string;
      'width'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface OfPharmaceuticFormsPopover {
      'pharmaceuticForms': Array<any>;
      'pharmaceuticFormsEmitter': EventEmitter;
    }
  }

  interface HTMLOfPharmaceuticFormsPopoverElement extends StencilComponents.OfPharmaceuticFormsPopover, HTMLStencilElement {}

  var HTMLOfPharmaceuticFormsPopoverElement: {
    prototype: HTMLOfPharmaceuticFormsPopoverElement;
    new (): HTMLOfPharmaceuticFormsPopoverElement;
  };
  interface HTMLElementTagNameMap {
    'of-pharmaceutic-forms-popover': HTMLOfPharmaceuticFormsPopoverElement;
  }
  interface ElementTagNameMap {
    'of-pharmaceutic-forms-popover': HTMLOfPharmaceuticFormsPopoverElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'of-pharmaceutic-forms-popover': JSXElements.OfPharmaceuticFormsPopoverAttributes;
    }
  }
  namespace JSXElements {
    export interface OfPharmaceuticFormsPopoverAttributes extends HTMLAttributes {
      'pharmaceuticForms'?: Array<any>;
      'pharmaceuticFormsEmitter'?: EventEmitter;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppAuthentication {

    }
  }

  interface HTMLAppAuthenticationElement extends StencilComponents.AppAuthentication, HTMLStencilElement {}

  var HTMLAppAuthenticationElement: {
    prototype: HTMLAppAuthenticationElement;
    new (): HTMLAppAuthenticationElement;
  };
  interface HTMLElementTagNameMap {
    'app-authentication': HTMLAppAuthenticationElement;
  }
  interface ElementTagNameMap {
    'app-authentication': HTMLAppAuthenticationElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-authentication': JSXElements.AppAuthenticationAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAuthenticationAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppEncyclopedia {

    }
  }

  interface HTMLAppEncyclopediaElement extends StencilComponents.AppEncyclopedia, HTMLStencilElement {}

  var HTMLAppEncyclopediaElement: {
    prototype: HTMLAppEncyclopediaElement;
    new (): HTMLAppEncyclopediaElement;
  };
  interface HTMLElementTagNameMap {
    'app-encyclopedia': HTMLAppEncyclopediaElement;
  }
  interface ElementTagNameMap {
    'app-encyclopedia': HTMLAppEncyclopediaElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-encyclopedia': JSXElements.AppEncyclopediaAttributes;
    }
  }
  namespace JSXElements {
    export interface AppEncyclopediaAttributes extends HTMLAttributes {
      'onPharmaceuticFormsSelectionChanged'?: (event: CustomEvent) => void;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppMedicament {
      'medicament': any;
    }
  }

  interface HTMLAppMedicamentElement extends StencilComponents.AppMedicament, HTMLStencilElement {}

  var HTMLAppMedicamentElement: {
    prototype: HTMLAppMedicamentElement;
    new (): HTMLAppMedicamentElement;
  };
  interface HTMLElementTagNameMap {
    'app-medicament': HTMLAppMedicamentElement;
  }
  interface ElementTagNameMap {
    'app-medicament': HTMLAppMedicamentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-medicament': JSXElements.AppMedicamentAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMedicamentAttributes extends HTMLAttributes {
      'medicament'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfilePassword {
      'profileId': string;
    }
  }

  interface HTMLAppProfilePasswordElement extends StencilComponents.AppProfilePassword, HTMLStencilElement {}

  var HTMLAppProfilePasswordElement: {
    prototype: HTMLAppProfilePasswordElement;
    new (): HTMLAppProfilePasswordElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile-password': HTMLAppProfilePasswordElement;
  }
  interface ElementTagNameMap {
    'app-profile-password': HTMLAppProfilePasswordElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile-password': JSXElements.AppProfilePasswordAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfilePasswordAttributes extends HTMLAttributes {
      'profileId'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {

    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSuggestion {
      'category': any;
      'pharmaceuticForms': any;
      'searchText': string;
    }
  }

  interface HTMLAppSuggestionElement extends StencilComponents.AppSuggestion, HTMLStencilElement {}

  var HTMLAppSuggestionElement: {
    prototype: HTMLAppSuggestionElement;
    new (): HTMLAppSuggestionElement;
  };
  interface HTMLElementTagNameMap {
    'app-suggestion': HTMLAppSuggestionElement;
  }
  interface ElementTagNameMap {
    'app-suggestion': HTMLAppSuggestionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-suggestion': JSXElements.AppSuggestionAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSuggestionAttributes extends HTMLAttributes {
      'category'?: any;
      'pharmaceuticForms'?: any;
      'searchText'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppTerm {
      'formState': number;
      'profileData': any;
    }
  }

  interface HTMLAppTermElement extends StencilComponents.AppTerm, HTMLStencilElement {}

  var HTMLAppTermElement: {
    prototype: HTMLAppTermElement;
    new (): HTMLAppTermElement;
  };
  interface HTMLElementTagNameMap {
    'app-term': HTMLAppTermElement;
  }
  interface ElementTagNameMap {
    'app-term': HTMLAppTermElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-term': JSXElements.AppTermAttributes;
    }
  }
  namespace JSXElements {
    export interface AppTermAttributes extends HTMLAttributes {
      'formState'?: number;
      'profileData'?: any;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface MyApp {

    }
  }

  interface HTMLMyAppElement extends StencilComponents.MyApp, HTMLStencilElement {}

  var HTMLMyAppElement: {
    prototype: HTMLMyAppElement;
    new (): HTMLMyAppElement;
  };
  interface HTMLElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  interface ElementTagNameMap {
    'my-app': HTMLMyAppElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'my-app': JSXElements.MyAppAttributes;
    }
  }
  namespace JSXElements {
    export interface MyAppAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }