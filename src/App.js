import { eventBus, Component } from './core';
import { togglePreloader, checkPath } from './utils'
import './components';
import './auth'
import { APP_EVENTS, APP_ROUTES } from './constants';
import { authService } from './services';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			isOverlayOpen: false,
			isMenuOpen: false,
			isAsideHidden: false,
			isLoading: false,
			isUserLogged: false,
			asideItems: [
				{
					href: '#',
					content: 'Ккал',
					sign: 'Программы',
				},
				{
					href: '#',
					icon: {
						src: 'fish.svg',
						title: 'Море продукты',
					},
					sign: 'Fish',
				},
				{
					href: '#',
					modifier: 'veggle',
					icon: {
						src: 'carrot.svg',
						title: 'Овощи',
					},
					sign: 'Veggle',
				},
				{
					href: '#',
					modifier: 'bottle',
					icon: {
						src: 'bottle.svg',
						title: 'Напитки',
					},
					sign: 'Detox',
				},
				{
					href: '#',
					icon: {
						src: 'meat.svg',
						title: 'Мясные изделия',
					},
					sign: 'Keto',
				},
				{
					href: '#',
					content: '5',
					icon: {
						src: 'table.svg',
						title: '5 стол',
					},
					sign: '5 стол',
				},
			],
		};
	}

	getUser() {
		togglePreloader(this)
		authService.init()
			.then((user) => {
				authService.user = user;
				this.setState((state) => {
					return {
						...state,
						isUserLogged: !!user
					}
				})
			})
			.finally(() => togglePreloader(this))
	}

	onToggleMenu = (evt) => {
		this.setState((state) => ({
			...state,
			isMenuOpen: !state.isMenuOpen,
			isOverlayOpen: !state.isOverlayOpen,
		}));
	}

	onCloseBurger = () => {
		this.setState((state) => {
			return {
				...state,
				isMenuOpen: false,
				isOverlayOpen: false,
			}
		})
	}

	setAsideVisibility = (evt) => {
		const currPath = evt?.detail?.target || window.location.pathname

		this.setState((state) => {
			return {
				...state,
				isAsideHidden: !!checkPath(currPath)
			}
		})
	}

	onLoggedOut = () => {
		togglePreloader(this)
		authService.signOut()
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						isUserLogged: false,
					}
				})
				eventBus.emit(
					APP_EVENTS.changeRoute,
					{ target: APP_ROUTES.signInPage }
				)
			})
			.catch((err) => console.log(err))
			.finally(() => togglePreloader(this))
	}

	onLoggedIn = ({ detail }) => {
		this.setState((state) => {
			return {
				...state,
				isUserLogged: !!detail.user
			}
		})
	}

	componentDidMount() {
		this.getUser();
		this.setAsideVisibility();
		this.addEventListener(APP_EVENTS.toggleMenu, this.onToggleMenu);
		eventBus.on(APP_EVENTS.changeRoute, this.setAsideVisibility);
		eventBus.on(APP_EVENTS.changeRoute, this.onCloseBurger);
		eventBus.on(APP_EVENTS.userLoggedOut, this.onLoggedOut);
		eventBus.on(APP_EVENTS.userLoggedIn, this.onLoggedIn);
	}

	componentWillUnmount() {
		this.removeEventListener(APP_EVENTS.toggleMenu, this.onToggleMenu);
		eventBus.off(APP_EVENTS.changeRoute, this.setAsideVisibility)
		eventBus.off(APP_EVENTS.changeRoute, this.onCloseBurger);
		eventBus.off(APP_EVENTS.userLoggedOut, this.onLoggedOut)
		eventBus.off(APP_EVENTS.userLoggedIn, this.onLoggedIn);
	}

	render() {
		return `
		<gastro-preloader is-loading="${this.state.isLoading}">
			<gastro-overlay is-open="${this.state.isOverlayOpen}">
				<gastro-router>
					<gastro-header
						is-user-logged="${this.state.isUserLogged}"
					>
					</gastro-header>
					<gastro-burger-menu
						is-open="${this.state.isMenuOpen}"
						is-user-logged="${this.state.isUserLogged}"
					>
					</gastro-burger-menu>
					<gastro-aside
						items='${JSON.stringify(this.state.asideItems)}'
						is-aside-hidden="${this.state.isAsideHidden}"
					>
					</gastro-aside>			
					<main class="main">
						<gastro-route
							path="${APP_ROUTES.homePage}"
							component="gastro-home-page"
							title="Home Page"
						>
						</gastro-route>
						<gastro-private-route
							path="${APP_ROUTES.adminPage}"
							component="gastro-admin-page"
							title="Admin Page"
						>
						</gastro-private-route>
						<gastro-route
							path="${APP_ROUTES.signInPage}"
							component="gastro-sign-in-page"
							title="SignIn Page"
						>
						</gastro-route>
						<gastro-route
							path="${APP_ROUTES.signUpPage}"
							component="gastro-sign-up-page"
							title="SignUp Page"
						>
						</gastro-route>
						<gastro-route 
							path="${APP_ROUTES.blogPage}" 
							component="gastro-blog-page"
							title="Blog Page"
						>
						</gastro-route>
						<gastro-route 
							path="${APP_ROUTES.blogPage}/:id" 
							component="gastro-blog-details-page"
							title="Blog Details Page"
						>
						</gastro-route>
						<gastro-route 
							path="${APP_ROUTES.aboutPage}" 
							component="gastro-about-page" 
							title="About Page"
						>
						</gastro-route>
						<gastro-route 
							path="${APP_ROUTES.errorPage}" 
							component="gastro-error-page" 
							title="Page not found"
						>
						</gastro-route>
						<gastro-outlet></gastro-outlet>
					</main>
					<gastro-footer
						is-user-logged="${this.state.isUserLogged}"
					>
					</gastro-footer>
					<div
						class="overlay ${this.state.overlayOn ? 'overlay-on' : ''}"
					>
					</div>
				</gastro-router>
			</gastro-overlay>
		</gastro-preloader>
      `;
	}
}

customElements.define('gastro-app', App);

