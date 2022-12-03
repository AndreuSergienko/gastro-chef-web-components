import './Button.scss';
import { Component } from '../../../core';

export class Button extends Component {
	constructor() {
		super();
	}

	onClick(evt) {
		if (evt.target.closest('.burger-button')) {
			this.dispatch(this.props.evttype);
		}
		if (evt.target.closest('.close-burger')) {
			this.dispatch(this.props.evttype);
		}
	}

	componentDidMount() {
		this.addEventListener('click', this.onClick);
	}

	static get observedAttributes() {
		return ['src', 'content', 'classname', 'evttype'];
	}

	render() {
		return `
      <button class="${this.props.classname}">
         ${
				this.props.src
					? `<img src="../../../assets/images/${this.props.src}" alt="Button" />`
					: ''
			}
         ${this.props.content ?? ''}
      </button>
      `;
	}
}

customElements.define('gastro-button', Button);
