import { Component, FormManager, Validator, eventBus } from "../../../core";
import { initialFieldsState } from "./initialState";
import "../../atoms";
import "../../molecules";
import { authService } from "../../../services";
import { APP_ROUTES, APP_EVENTS } from "../../../constants";
import './SignUp.scss'

export class SignUpPage extends Component {
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

    toggleIsLoading = () => {
        this.setState((state) => {
            return {
                ...state,
                isLoading: !state.isLoading,
            };
        });
    };

    signUp = (data) => {
        this.toggleIsLoading();
        authService
            .signUp(data.email, data.password)
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
                        error: error,
                    };
                });
            })
            .finally(() => {
                this.toggleIsLoading();
            });
    };

    validateForm = (evt) => {
        if (evt.target.closest("gastro-input")) {
            this.form.init(this.querySelector(".sign-up__form"), {
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
        this.addEventListener("submit", this.form.handleSubmit(this.signUp));
    }

    componentWillUnmount() {
        eventBus.off(APP_EVENTS.validateControls, this.validate);
    }

    render() {
        const {
            fields: { email, password },
        } = this.state;

        return `
      <gastro-preloader is-loading="${this.state.isLoading}">
        <div class="sign-up__main">
            <div class="sign-up__box">
                <h1 class="sign-up__title">Регистрация</h1>
                <form class="sign-up__form">
                    <div class="invalid-feedback text-center d-block">
                        ${this.state.error ?? ''}
                    </div>
                    <gastro-input
                        parent-class="sign-up__form-field"
                        type="email"
                        label="Email"
                        control-name="email"
                        class-name="sign-up__form"
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
                        parent-class="sign-up__form-field" 
                        type="password" 
                        label="Password"
                        control-name="password"
                        placeholder="Введите ваш пароль"
                        class-name="sign-up__form"
                        value="${password.value}"
                        is-valid="${password.isValid}"
                        is-touched="${password.isTouched}"
                        error-message="${password.errors?.message}"
                    ></gastro-input>
                    <div class="invalid-feedback mb-3 d-block">
                        ${password.errors.message ?? ''}
                    </div>
                    <gastro-button
                        parent-class="sign-up__form-reg"
                        type="submit"
                        classname="sign-up__form-button"
                        content="Зарегистрироваться"
                    ></gastro-button>
                </form>
            </div>
        </div>
        
      </gastro-preloader>
    `;
    }
}

customElements.define("gastro-sign-up-page", SignUpPage);
