import { Component } from "../../../core";
import { setParentClass } from "../../../utils";
import './Input.scss';

export class Input extends Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return [
            "type",
            "label",
            "control-name",
            "class-name",
            "value",
            "is-valid",
            "is-touched",
            "error-message",
            "placeholder",
            "parent-class",
        ];
    }

    componentDidMount() {
        setParentClass(this)
    }

    render() {
        const controlClassName = JSON.parse(this.props['is-valid']) ? 'valid' : 'invalid';
        const isAddClassName = JSON.parse(this.props['is-touched']) ? controlClassName : '';

        return `
            <label
                class="${this.props['class-name'] ?? 'form'}-label ${isAddClassName}"
            >${this.props.label}</label>
            <input
                class="${isAddClassName} ${this.props['class-name'] ?? 'form'}-input"
                type="${this.props.type}"
                name="${this.props['control-name']}"
                value="${this.props.value}"
                placeholder="${this.props.placeholder}"
            />
        `
    }
}

customElements.define('gastro-input', Input)