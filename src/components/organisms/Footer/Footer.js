import './Footer.scss'
import { Component, eventBus } from '../../../core';
import '../../atoms'
import '../../molecules'
import { APP_ROUTES, APP_EVENTS } from '../../../constants'

export class Footer extends Component {
    constructor() {
        super();
        this.state = {
            navItemsWithoutUser: [
                {
                    to: `${APP_ROUTES.blogPage}`,
                    label: 'Блог',
                },
                {
                    to: `${APP_ROUTES.aboutPage}`,
                    label: 'О нас',
                },
                {
                    to: `${APP_ROUTES.signInPage}`,
                    label: 'Войти',
                },
                {
                    to: `${APP_ROUTES.signUpPage}`,
                    label: 'Регистрация',
                },
                {
                    to: `${APP_ROUTES.adminPage}`,
                    label: 'Админ',
                },
            ],
            navItemsWithUser: [
                {
                    to: `${APP_ROUTES.blogPage}`,
                    label: 'Блог',
                },
                {
                    to: `${APP_ROUTES.aboutPage}`,
                    label: 'О нас',
                },
                {
                    to: `${APP_ROUTES.adminPage}`,
                    label: 'Админ',
                },
                {
                    signOutModifier: 'sign-out-link',
                    label: 'Выйти',
                },
            ],
            activeLinkPath: window.location.pathname,
            socialsItems: [
                {
                    href: 'https://instagram.com',
                    img: {
                        src: 'footer/insta.svg',
                        alt: 'instagram',
                    }
                },
                {
                    href: 'https://facebook.com',
                    img: {
                        src: 'footer/facebook.svg',
                        alt: 'facebook',
                    }
                },
                {
                    href: 'https://viber.com',
                    img: {
                        src: 'footer/viber.svg',
                        alt: 'viber',
                    }
                },
                {
                    href: 'https://telegram.com',
                    img: {
                        src: 'footer/telegram.svg',
                        alt: 'telegram',
                    }
                },
            ],
        };
    }

    static get observedAttributes() {
        return ['is-user-logged']
    }

    onClick(evt) {
        if (evt.target.closest('.sign-out-link')) {
            evt.preventDefault();
            eventBus.emit(APP_EVENTS.userLoggedOut)
        }
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick);
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
        <footer class="footer">
		<div class="footer-wrapper">
			<div class="container">
				<div class="footer-container">
					<gastro-navigation
                        items='${JSON.parse(this.props['is-user-logged']) ?
                JSON.stringify(this.state.navItemsWithUser) :
                JSON.stringify(this.state.navItemsWithoutUser)}'
                        classname="footer"
                        active-link-path="${this.state.activeLinkPath}"
                    >
                    </gastro-navigation>
                    <gastro-nav-link to="${APP_ROUTES.homePage}">
                     <gastro-logo
                        classname="footer" 
                        src="footer/footer-logo.png"
                     >
                     </gastro-logo>
                  </gastro-nav-link>
					<div class="footer__contacts">
						<a href="#" class="footer__contacts-terms">
							Условия сотрудничества
						</a>
						<a href="#" class="footer__contacts-faq">
                            faq
                        </a>
                        <gastro-socials
                            items='${JSON.stringify(this.state.socialsItems)}'
                            classname="footer__contacts-socials"
                        >
                        </gastro-socials>
						<gastro-phone 
                            hasphoneicon="false" 
                            classname="footer__contacts-phone"
                        >
                        </gastro-phone>
					</div>
				</div>
			</div>
		</div>
	</footer>
      `;
    }
}

customElements.define('gastro-footer', Footer);
