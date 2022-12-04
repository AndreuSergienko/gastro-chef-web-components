import { Component } from "../../../core";
import './DietModeButton.scss';

export class DietModeButton extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['mode']
  }

  render() {
    this.props.mode = JSON.parse(this.props.mode)
    const { mode } = this.props;
    return `
      <button class="diet__modes-btn">
        <span class="diet__modes-btn-title">${mode.title}</span>
        <span class="diet__modes-btn-cal">${mode.calories} ккал</span>
      </button>
    `
  }
}

customElements.define('gastro-diet-mode-button', DietModeButton);