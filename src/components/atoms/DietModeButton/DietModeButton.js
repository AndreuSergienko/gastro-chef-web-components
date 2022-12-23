import { Component } from "../../../core";
import './DietModeButton.scss';
import { APP_EVENTS } from "../../../constants";
import { setParentClass } from "../../../utils";

export class DietModeButton extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['title', 'calories', 'isactive', 'index', 'parent-class']
  }

  onClick() {
    this.dispatch(APP_EVENTS.switchMode, {
      clickedModeIndex: +this.props.index,
    })
  }

  componentDidMount() {
    setParentClass(this)
    this.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick)
  }

  render() {
    this.props.isactive = JSON.parse(this.props.isactive);

    const { title, calories, isactive } = this.props;

    return `
      <button class="diet__modes-btn ${isactive ? 'active' : ''}">
        <span class="diet__modes-btn-title">${title}</span>
        <span class="diet__modes-btn-cal">${calories} ккал</span>
      </button>
    `
  }
};

customElements.define('gastro-diet-mode-button', DietModeButton);