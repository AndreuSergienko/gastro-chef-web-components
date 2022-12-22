import './DietModeShedule.scss';
import { Component } from '../../../core';
import '../../atoms';
import '../../molecules';
import { setParentClass } from '../../../utils';

export class DietModeShedule extends Component {

  static get observedAttributes() {
    return ['shedule', 'outlet-menu-day', 'active-day-index', 'parent-class']
  }

  componentDidMount() {
    setParentClass(this)
  }

  render() {
    const shedule = JSON.parse(this.props.shedule),
      outletMenuDay = JSON.parse(this.props['outlet-menu-day']),
      activeDayIndex = JSON.parse(this.props['active-day-index'])
    return `
          <div class="diet__modes-content-shedule">
            <div class="diet__modes-content-shedule-days">
            ${shedule.map(({ day }, index) => (`
              <gastro-diet-day-button 
                index="${index}"
                is-active='${index === activeDayIndex}'
                content="${day}"
                classname="diet__modes-content-shedule-day menu-day"
              >
              </gastro-diet-day-button>
            `)).join('')}             
            </div>
            <div class="diet__modes-content-shedule-menu">
            ${outletMenuDay?.menu?.map(({ mealName, mealTime, dishes, portion }) => (`
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
        `
  }
}

customElements.define('gastro-diet-mode-shedule', DietModeShedule);