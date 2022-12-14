import { Component } from "../Component";
import { APP_EVENTS } from "../../constants";
import { eventBus } from "../EventBus";
import { setParentClass } from "../../utils";

export class Link extends Component {
    constructor() {
        super();
        this.isShadow = true
    }

    static get observedAttributes() {
        return ['to', 'parent-class', 'label']
    }

    onClick = (evt) => {
        evt.preventDefault();
        if (this.props.to) {
            eventBus.emit(APP_EVENTS.changeRoute, { target: this.props.to })
        }
    }

    componentDidMount() {
        setParentClass(this)
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
            <style>
                a {
                    text-decoration: none;
                }
            </style>
            <a href="${this.props.to ?? '/'}">
                <slot></slot>
            </a>
        `;
    }
}

customElements.define('gastro-nav-link', Link)