import { Component } from "../../../core";
import './AdvantagesItem.scss';

export class AdvantagesItem extends Component {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['img', 'info'];
    }

    render() {
        const { img, info } = this.props;
        return `
        <div class="advantages__item">
            <div class="advantages__item-img">
                <img
                    class="advantages__item-img--${JSON.parse(img).modifier}"
                    src="../../../assets/images/advantages/${JSON.parse(img).src}"
                    alt="${JSON.parse(img).alt}"
                />
            </div>
            <p class="advantages__item-info">
                ${info}
            </p>
        </div>
        `
    }
}

customElements.define('gastro-advantages-item', AdvantagesItem);