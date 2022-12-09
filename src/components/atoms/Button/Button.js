import './Button.scss';
import { Component } from '../../../core';

export class Button extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['type', 'src', 'content', 'classname', 'evttype'];
	}

	render() {
		return `
      <button
		class="${this.props.classname}"
		type=${this.props.type ?? 'button'}
	>
        ${this.props.src ? `
					 <img src="../../../assets/images/${this.props.src}" alt="Button" />
					`: ''}
        ${this.props.content ?? ''}
      </button>
      `;
	}
}

customElements.define('gastro-button', Button);
