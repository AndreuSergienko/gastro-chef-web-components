import { Component } from '../../../core';
import './DietModeContent.scss';
import '../../atoms/Button';
import { APP_EVENTS } from '../../../constants';

export class DietModeContent extends Component {
  constructor() {
    super();
    this.state = {
      shedule: [],
      outletMenuDay: {},
      activeDayIndex: 0,
    }
  }

  static get observedAttributes() {
    return ['mode']
  }

  initOutletDailyMenu({ shedule }) {
    this.setState((state) => {
      return {
        ...state,
        shedule: shedule,
        outletMenuDay: {
          ...shedule[this.state.activeDayIndex]
        }
      }
    })
  }

  onMenuChange({ detail }) {
    this.setState((state) => {
      return {
        ...state,
        outletMenuDay: {
          ...state.shedule[detail.activeDayIndex]
        },
        activeDayIndex: detail.activeDayIndex
      }
    })
  }

  componentDidMount() {
    this.initOutletDailyMenu(JSON.parse(this.props.mode))
    this.addEventListener(APP_EVENTS.changeDailyMenu, this.onMenuChange)
  }

  componentWillUnmount() {
    this.removeEventListener(APP_EVENTS.changeDailyMenu, this.onMenuChange)
  }

  render() {
    const {
      title, calories, isActive, priceList, shedule
    } = JSON.parse(this.props.mode);

    return `
      <div class="diet__modes-content">
        <div class="diet__modes-content-item ${isActive ? 'active' : ''}">
          <div class="diet__modes-content-info">
            <div class="diet__modes-content-info-description">
              <h4 class="diet__modes-content-info-description-title">
                ${title}
              <span>${calories} ккал</span>
              </h4>
              <p class="diet__modes-content-info-description-text">
              Программа здорового питания <strong>${title}</strong>. Идеально для:
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
          <div class="diet__modes-content-shedule">
            <div class="diet__modes-content-shedule-days">
            ${shedule.map(({ day }, index) => (`
              <gastro-diet-day-button 
                index="${index}"
                is-active='${index === this.state.activeDayIndex ? true : false}'
                content="${day}"
                classname="diet__modes-content-shedule-day menu-day"
              >
              </gastro-diet-day-button>
            `)).join('')}             
            </div>
            <div class="diet__modes-content-shedule-menu">
            ${this.state.outletMenuDay?.menu?.map(({ mealName, mealTime, dishes, portion }) => (`
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">
                    ${mealName}
                  </span>
                  <span class="diet__modes-content-shedule-menu-meal-time">
                  ${mealTime}
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                ${dishes.map((dish) => (`
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    ${dish}
                  </span>
                `)).join('')}
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                ${portion.map(({ quantity, unit }) => (`
                  <span class="diet__modes-content-shedule-menu-portion-quantity">
                      ${quantity}${unit}
                  </span>
                `)).join('')}
                </div>
              </div>  
            `)).join('')}
            </div>
          </div>
        </div>
      </div>
        `
  }
}

customElements.define('gastro-diet-mode-content', DietModeContent);