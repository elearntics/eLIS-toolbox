import { html } from 'lit-element';
import ElisUnit from './core/ElisUnit';


class CardElement extends ElisUnit {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="elis-Card"></div>
    `;
  }
}

customElements.define('elis-card', CardElement);