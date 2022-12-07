import './AssistanceOrder.scss'
import { Component } from '../../../core'

export class AssistanceOrder extends Component {
    constructor() {
        super()
    }

    render() {
        return `
        <div class="assistance__order">
        <h3 class="assistance__order-title">Оформить заказ</h3>
        <p class="assistance__order-comment">
            Обсудите все детали заказа по телефону или сами укажите все
            подробности онлайн
        </p>
        <form class="assistance__order-form">
            <div class="assistance__order-form-field">
                <label class="assistance__order-form-label correct">
                    Имя
                </label>
                <input class="assistance__order-form-input" autocomplete="off" type="text" name="user-name" value="" placeholder="Enter your name" />
            </div>
            <div class="assistance__order-form-field">
                <label class="assistance__order-form-label uncorrect">
                    Номер телефона
                </label>
                <input class="assistance__order-form-input" autocomplete="off" type="tel" name="user-tel" value="" placeholder="Enter your phone" />
            </div>
            <div class="assistance__order-form-terms">
                <div class="assistance__order-form-terms-row">
                    <label class="assistance__order-form-terms-label">
                        <input type="checkbox" checked class="assistance__order-form-terms-checkbox" />
                        <span class="custom-checkbox"></span>
                        <span class="assistance__order-form-terms-label-text">Тест-день! Получить скидку -30%?</span>
                    </label>
                </div>
                <div class="assistance__order-form-terms-row">
                    <label class="assistance__order-form-terms-label">
                        <input type="checkbox" class="assistance__order-form-terms-checkbox" />
                        <span class="custom-checkbox"></span>
                        <span class="assistance__order-form-terms-label-text">
                            Согласен с
                            <a class="assistance__order-form-terms-label-text-link" href="#">
                                условиями сотрудничества
                            </a>
                        </span>
                    </label>
                </div>
            </div>
            <div class="assistance__order-form-btns">
                <button type="button" class="assistance__order-form-btn primary-button assistance__order-form-btn--tel">
                    Заказ по телефону
                </button>
                <p class="assistance__order-form-btns-text">или</p>
                <button type="button" class="assistance__order-form-btn primary-button assistance__order-form-btn--online">
                    Онлайн заказ
                </button>
            </div>
        </form>
    </div>
        `
    }
}

customElements.define('gastro-assistance-order', AssistanceOrder)