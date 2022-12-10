import { Component } from "../../../core";
import './Socials.scss'

export class Socials extends Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['items', 'classname']
    }

    render() {
        return `
        <div class="${this.props.classname}">
        ${JSON.parse(this.props.items).map(({ href, img }) => (`
            <a 
                href="${href}"
                class="${this.props.classname}-link"
            >
                <img 
                    src="../../../assets/images/${img.src}"
                    alt="${img.alt}" 
                />
            </a>
        `)).join('')}
		</div>
        `
    }
}

customElements.define('gastro-socials', Socials)