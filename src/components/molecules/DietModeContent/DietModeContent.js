import { Component } from '../../../core';
import './DietModeContent.scss';
import '../../atoms/Button';

export class DietModeContent extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['mode']
  }

  render() {
    const { title, calories, isActive } = JSON.parse(this.props.mode);
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
              <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    Тестовый день
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                    510 грн
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    357 грн
                </span>
                </div>
                <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    1 день
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    510 грн
                </span>
                </div>
                <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    от 7 дней
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                    510 грн
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    490 грн
                </span>
                </div>
                <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    от 14 дней
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                    510 грн
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    470 грн
                </span>
                </div>
                <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    от 30 дней
                </span>
                <span class="diet__modes-content-info-price-list-nonsale">
                    510 грн
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    445 грн
                </span>
                </div>
                <div class="diet__modes-content-info-price-list-item">
                <span class="diet__modes-content-info-price-list-days">
                    Завтрак и ужин
                </span>
                <span class="diet__modes-content-info-price-list-nonsale non-line-through">
                    -15%
                </span>
                <span class="diet__modes-content-info-price-list-sale">
                    433 грн
                </span>
              </div>
            </div>
            <gastro-button
              content="Заказать"
              classname="diet__modes-content-info-btn primary-button"
            >
            </gastro-button>
          </div>
          <div class="diet__modes-content-shedule">
            <div class="diet__modes-content-shedule-days">
              <button type="button" class="diet__modes-content-shedule-day">
                пн
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                вт
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                ср
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                чт
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                пт
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                сб
              </button>
              <button type="button" class="diet__modes-content-shedule-day">
                вс
              </button>
            </div>
            <div class="diet__modes-content-shedule-menu">
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">Завтрак</span>
                  <span class="diet__modes-content-shedule-menu-meal-time">7:00 - 9:00</span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Фриттата с сыром и кабачками
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                  <span class="diet__modes-content-shedule-menu-portion-quantity">170гр</span>
                </div>
              </div>
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">2-й завтрак</span>
                  <span class="diet__modes-content-shedule-menu-meal-time">10:00 - 12:00</span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Фермерский йогурт
                  </span>
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Полезное печенье из сухофруктов
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                  <span class="diet__modes-content-shedule-menu-portion-quantity">200гр</span>
                  <span class="diet__modes-content-shedule-menu-portion-quantity">2 шт</span>
                </div>
              </div>
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">Обед</span>
                  <span class="diet__modes-content-shedule-menu-meal-time">13:00 - 15:00</span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Люля-кебаб из индейки
                  </span>
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Летний салат с маслинами и сыром
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                  <span class="diet__modes-content-shedule-menu-portion-quantity">100гр</span>
                  <span class="diet__modes-content-shedule-menu-portion-quantity">100гр</span>
                </div>
              </div>
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">Полдник</span>
                  <span class="diet__modes-content-shedule-menu-meal-time">16:00 - 17:30</span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Творожное суфле с какао и вишей
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                  <span class="diet__modes-content-shedule-menu-portion-quantity">100гр</span>
                </div>
              </div>
              <div class="diet__modes-content-shedule-menu-item">
                <div class="diet__modes-content-shedule-menu-meal">
                  <span class="diet__modes-content-shedule-menu-meal-name">Ужин</span>
                  <span class="diet__modes-content-shedule-menu-meal-time">19:00 - 20:00</span>
                </div>
                <div class="diet__modes-content-shedule-menu-dishes">
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Рыбный терен
                  </span>
                  <span class="diet__modes-content-shedule-menu-dishes-name">
                    - Овощи гриль
                  </span>
                </div>
                <div class="diet__modes-content-shedule-menu-portion">
                  <span class="diet__modes-content-shedule-menu-portion-quantity">100гр</span>
                  <span class="diet__modes-content-shedule-menu-portion-quantity">150гр</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
  }
}

customElements.define('gastro-diet-mode-content', DietModeContent);