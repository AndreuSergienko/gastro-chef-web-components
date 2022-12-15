import { Component } from "../Component";

export class Link extends Component {
    constructor() {
        super();
        this.isShadow = true
    }

    static get observedAttributes() {
        return ['to', 'classname', 'label']
    }

    onClick = (evt) => {
        evt.preventDefault();
        this.dispatch('change-route', { target: this.props.to })
    }

    componentDidMount() {
        this.addClass(this.props.classname)
        this.addEventListener('click', this.onClick)
    }

    addClass(classname) {
        if (classname) {
            this.classList.add(classname)
            return;
        }
        return;
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