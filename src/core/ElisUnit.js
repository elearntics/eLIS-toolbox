import { LitElement, html } from 'lit-element';


export class ElisUnit extends LitElement {
  constructor() {
    super();

    this.id =  '';
    this.name =  '';
    this.value =  '';
    this.match =  '';
    this.sorted =  '';
    this.media =  [];
    this.author =  '';
  }

  static get properties() {
    return {
      elisid: {
        type: String
      },
      name: {
        type: String
      },
      value: {
        type: String
      },
      match: {
        type: String
      },
      sorted: {
        type: Boolean
      },
      media: {
        type: Array
      },
      author: {
        type: String
      }
    };
  }
}

customElements.define('e-card', CardElement);