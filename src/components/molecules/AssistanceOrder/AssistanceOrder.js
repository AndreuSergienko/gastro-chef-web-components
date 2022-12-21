import './AssistanceOrder.scss'
import { Component, eventBus, FormManager, Validator } from '../../../core';
import { initialFieldsState } from './initialState'
import '../OrderForm'
import { APP_EVENTS } from '../../../constants';
import { setParentClass } from '../../../utils';

export class AssistanceOrder extends Component {
    constructor() {
        super()
        this.state = {
            error: "",
            isLoading: false,
            fields: {
                ...initialFieldsState,
            },
        };

        this.form = new FormManager();
    }

    validateForm = (evt) => {
        if (evt.target.closest("gastro-input")) {
            this.form.init(this.querySelector("#order-form"), {
                username: [
                    Validator.required('The field should not be empty')
                ],
                usertel: [
                    Validator.phone('The phone is wrong'),
                    Validator.required('The field should not be empty')
                ],
            });
        }
    };

    validate = (evt) => {
        this.setState((state) => {
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...evt.detail,
                },
            };
        });
    };

    static get observedAttributes() {
        return ['parent-class']
    }

    componentDidMount() {
        setParentClass(this)
        this.addEventListener("click", this.validateForm);
        eventBus.on(APP_EVENTS.validateControls, this.validate);
        this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
    }

    render() {

        return `
        <div class="assistance__order">
            <h3 class="assistance__order-title">Оформить заказ</h3>
            <p class="assistance__order-comment">
                Обсудите все детали заказа по телефону или сами укажите все
                подробности онлайн
            </p>
            <gastro-order-form
                fields='${JSON.stringify(this.state.fields)}'
                class-name="assistance__order-form"
                id="order-form"
            >
            </gastro-order-form>
        </div>
        `
    }
}

customElements.define('gastro-assistance-order', AssistanceOrder)