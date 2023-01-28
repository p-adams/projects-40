import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("qr-code-reader-element")
export class QRCodeReaderElement extends LitElement {
  render() {
    return html`<div>QR Code Reader Element</div>`;
  }
}
