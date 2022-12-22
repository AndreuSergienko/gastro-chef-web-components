import './DietModeInfo.scss'
import '../../atoms';
import { Component } from '../../../core';
import { setParentClass } from '../../../utils';

export class DietModeInfo extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    static get observedAttributes() {
        return ['title', 'price-list', 'calories', 'parent-class']
    }

    componentDidMount() {
        setParentClass(this)
    }

    render() {
        const priceList = JSON.parse(this.props['price-list'])

        return `        
          <div class="diet__modes-content-info">
            <div class="diet__modes-content-info-description">
              <h4 class="diet__modes-content-info-description-title">
                ${this.props.title}
              <span>${this.props.calories} ккал</span>
              </h4>
              <p class="diet__modes-content-info-description-text">
              Программа здорового питания <strong>${this.props.title}</strong>. Идеально для:
              похудения в кратчайшие сроки, повышения энергии и сил,
              снижения веса при сидячем образе жизни.
              </p>
            </div>
            <div class="diet__modes-content-info-price-list">
            ${priceList.map((field) => (`
              <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    ${field.dayTitle}
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                    ${field.beforeSale} грн
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    ${field.afterSale} грн
                </span>
              </div>
            `)).join('')}
            </div>
            <gastro-button
              content="Заказать"
              classname="diet__modes-content-info-btn primary-button"
            >
            </gastro-button>
          </div>
        `
    }
}

customElements.define('gastro-diet-mode-info', DietModeInfo);