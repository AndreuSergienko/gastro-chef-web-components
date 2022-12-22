import './Button.scss';
import { Component } from '../../../core';
import { setParentClass } from '../../../utils';

export class Button extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return [
			'type',
			'src',
			'content',
			'is-active',
			'classname',
			'evttype',
			'parent-class',
		];
	}

	componentDidMount() {
		setParentClass(this)
	}

	render() {
		const setAddClass = this.props['is-active'] ? JSON.parse(this.props['is-active']) : false

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
