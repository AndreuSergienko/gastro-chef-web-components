import { Component } from "../../../core";
import './Form.scss';
import '../../atoms/Input'
import '../../atoms/Button';

export class Form extends Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['fields', 'class-name', 'id']
    }

    render() {
        const fields = JSON.parse(this.props.fields)
        const { username, usertel } = fields

        return `
        <form class="${this.props['class-name'] ?? ''}" id="${this.props.id ?? ''}">
            <div class="${this.props['class-name'] ?? ''}-field">
                <gastro-input
                    type="text"
                    label="Имя"
                    control-name="username"
                    value="${username.value}"
                    is-valid="${username.isValid}"
                    is-touched="${username.isTouched}"
                    error-message="${username.errors?.message}"
                    class-name="assistance__order-form"
                    placeholder="Введите ваше имя"
                >
            </div>
            </gastro-input>
            <div class="${this.props['class-name'] ?? ''}-field">
                <gastro-input
                    type="tel"
                    label="Номер телефона"
                    control-name="usertel"
                    value="${usertel.value}"
                    is-valid="${usertel.isValid}"
                    is-touched="${usertel.isTouched}"
                    error-message="${usertel.errors?.message}"
                    class-name="assistance__order-form"
                    placeholder="Введите ваш номер"
                >
                </gastro-input>
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
        `
    }
}

customElements.define('gastro-form', Form)