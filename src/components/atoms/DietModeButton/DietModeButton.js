import { Component } from "../../../core";
import './DietModeButton.scss';
import { EVENTS } from "../../../constants";

export class DietModeButton extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['mode', 'isactive', 'index']
  }

  onClick() {
    this.dispatch(EVENTS.switchMode, {
      mode: this.props.mode,
      clickedModeIndex: +this.props.index,
    })
  }

  componentDidMount() {
    this.addEventListener('click', this.onClick)
  }

  render() {
    this.props.mode = JSON.parse(this.props.mode);
    this.props.isactive = JSON.parse(this.props.isactive);
    const { mode, isactive } = this.props;
    return `
      <button class="diet__modes-btn ${isactive ? 'active' : ''}">
        <span class="diet__modes-btn-title">${mode.title}</span>
        <span class="diet__modes-btn-cal">${mode.calories} ккал</span>
      </button>
    `
  }
};

customElements.define('gastro-diet-mode-button', DietModeButton);