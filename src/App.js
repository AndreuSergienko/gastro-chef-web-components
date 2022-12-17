import * as core from './core';
import './components';
import { APP_EVENTS, APP_ROUTES } from './constants';
import { eventBus } from './core';

export class App extends core.Component {
	constructor() {
		super();
		this.state = {
			overlayOn: false,
			isMenuOpen: false,
			isMenuClosed: false,
			isAsideHidden: false,
			isLoading: false,
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

	onOpenMenu() {
		this.setState((state) => ({
			...state,
			isMenuOpen: true,
			isMenuClosed: false,
			overlayOn: true,
		}));
	}

	onCloseMenu() {
		this.setState((state) => ({
			...state,
			isMenuOpen: false,
			isMenuClosed: true,
			overlayOn: false,
		}));
	}

	onOverlay(e) {
		if (e.target.closest('.overlay')) {
			this.setState((state) => ({
				...state,
				overlayOn: false,
				isMenuOpen: false,
				isMenuClosed: true,
			}));
		}
	}

	setAsideVisibility = (currPath) => {
		this.setState((state) => {
			return {
				...state,
				isAsideHidden:
					currPath === APP_ROUTES.adminPage ||
					currPath === APP_ROUTES.blogPage
			}
		})
	}

	onAsideToggle = () => {
		this.setAsideVisibility(window.location.pathname)
	}

	componentDidMount() {
		this.onAsideToggle()
		this.addEventListener(APP_EVENTS.openMenu, this.onOpenMenu);
		this.addEventListener(APP_EVENTS.closeMenu, this.onCloseMenu);
		this.addEventListener('click', this.onOverlay);
		eventBus.on(APP_EVENTS.changeRoute, this.onAsideToggle)
	}

	componentWillUnmount() {
		this.removeEventListener(APP_EVENTS.openMenu, this.onOpenMenu);
		this.removeEventListener(APP_EVENTS.closeMenu, this.onCloseMenu);
		this.removeEventListener('click', this.onOverlay);
		eventBus.off(APP_EVENTS.changeRoute, this.onAsideToggle)
	}

	render() {
		return `
		<gastro-router>
			<gastro-header>
			</gastro-header>
			<gastro-burger-menu
				isopen="${this.state.isMenuOpen}"
				isclosed="${this.state.isMenuClosed}"
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
				<gastro-route
					path="${APP_ROUTES.adminPage}"
					component="gastro-admin-page"
					title="Admin Page"
				>
				</gastro-route>
				<gastro-route 
					path="${APP_ROUTES.blogPage}" 
					component="gastro-blog-page"
					title="Blog Page"
				>
				</gastro-route>
				<gastro-route 
					path="${APP_ROUTES.blogPage}/details" 
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
			<gastro-footer></gastro-footer>
			<div
				class="overlay ${this.state.overlayOn ? 'overlay-on' : ''}"
			>
			</div>
		</gastro-router>
      `;
	}
}

customElements.define('gastro-app', App);

