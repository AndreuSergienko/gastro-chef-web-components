import { Component, FormManager, Validator, eventBus } from "../../../core";
import { initialFieldsState } from "./initialState";
import "../../atoms";
import "../../molecules";
import { togglePreloader } from "../../../utils";
import { authService } from '../../../services'
import { APP_ROUTES, APP_EVENTS } from "../../../constants";
import './SignIn.scss'

export class SignInPage extends Component {
    constructor() {
        super();
        this.state = {
            error: "",
            isLoading: false,
            fields: {
                ...initialFieldsState,
            },
        };

        this.form = new FormManager();
    }

    signIn = (data) => {
        togglePreloader(this);
        authService
            .signIn(data.email, data.password)
            .then((user) => {
                authService.user = user;
                eventBus.emit(
                    APP_EVENTS.changeRoute,
                    { target: APP_ROUTES.homePage }
                );
                eventBus.emit(APP_EVENTS.userLoggedIn, { user });
            })
            .catch((error) => {
                this.setState((state) => {
                    return {
                        ...state,
                        error: error
                    }
                })
            })
            .finally(() => togglePreloader(this))
    };

    validateForm = (evt) => {
        if (evt.target.closest("gastro-input")) {
            this.form.init(this.querySelector(".sign-in__form"), {
                email: [
                    Validator.email("Email is not valid"),
                    Validator.required("The field should not be empty"),
                ],
                password: [
                    Validator.password("Password length should not be less than 8 chars"),
                    Validator.required("The field should not be empty"),
                ]
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

    scrollToTop() {
        window.scroll({
            left: 0,
            top: 0,
        })
    }

    componentDidMount() {
        this.scrollToTop()
        eventBus.on(APP_EVENTS.validateControls, this.validate);
        this.addEventListener("click", this.validateForm);
        this.addEventListener("submit", this.form.handleSubmit(this.signIn));
    }

    componentWillUnmount() {
        eventBus.off(APP_EVENTS.validateControls, this.validate);
        this.removeEventListener("submit", this.form.handleSubmit(this.signIn));
    }

    render() {
        const {
            fields: { email, password },
        } = this.state;

        return `
      <gastro-preloader is-loading="${this.state.isLoading}">
        <div class="sign-in__main">
            <div class="sign-in__box">
                <h1 class="sign-in__title">Войти</h1>
                <form class="sign-in__form">
                    <div class="invalid-feedback text-center d-block">
                        ${this.state.error ?? ''}
                    </div>
                    <gastro-input
                        parent-class="sign-in__form-field"
                        type="email"
                        label="Email"
                        control-name="email"
                        class-name="sign-in__form"
                        placeholder="Введите ваш email"
                        value="${email.value}"
                        is-valid="${email.isValid}"
                        is-touched="${email.isTouched}"
                        error-message="${email.errors?.message}"
                    ></gastro-input>
                    <div class="invalid-feedback mb-3 d-block">
                        ${email.errors.message ?? ''}
                    </div>

                    <gastro-input    
                        parent-class="sign-in__form-field" 
                        type="password" 
                        label="Password"
                        control-name="password"
                        placeholder="Введите ваш пароль"
                        class-name="sign-in__form"
                        value="${password.value}"
                        is-valid="${password.isValid}"
                        is-touched="${password.isTouched}"
                        error-message="${password.errors?.message}"
                    ></gastro-input>
                    <div class="invalid-feedback mb-3 d-block">
                        ${password.errors.message ?? ''}
                    </div>
                    <gastro-button
                        parent-class="sign-in__form-login"
                        type="submit"
                        classname="sign-in__form-button"
                        content="Войти"
                    ></gastro-button>
                </form>
            </div>
        </div>
        
      </gastro-preloader>
    `;
    }
}

customElements.define("gastro-sign-in-page", SignInPage);
