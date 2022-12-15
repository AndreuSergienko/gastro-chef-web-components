import './Footer.scss'
import { Component } from '../../../core';
import '../../molecules/Navigation'
import '../../atoms/Logo'
import '../../molecules/Socials'
import { APP_ROUTES } from '../../../constants'

export class Footer extends Component {
    constructor() {
        super();
        this.state = {
            navItems: [
                {
                    to: `${APP_ROUTES.homePage}`,
                    label: 'Главная',
                },
                {
                    to: '/',
                    label: 'Программы питания',
                },
                {
                    to: '/',
                    label: 'Gastro Shop',
                },
                {
                    to: `${APP_ROUTES.aboutPage}`,
                    label: 'О нас',
                },
                {
                    to: `${APP_ROUTES.blogPage}`,
                    label: 'Блог',
                },
            ],
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

    render() {
        return `
        <footer class="footer">
		<div class="footer-wrapper">
			<div class="container">
				<div class="footer-container">
					<gastro-navigation
                        items='${JSON.stringify(this.state.navItems)}'
                        classname="footer"
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
						<a 
                            href="tel: 380689494919" class="footer__contacts-phone"
                        >
							+38 (068) 949 - 49 - 19
						</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
      `;
    }
}

customElements.define('gastro-footer', Footer);
