import * as core from './core';
import './components';
import { EVENTS, APP_ROUTES } from './constants';

export class App extends core.Component {
	constructor() {
		super();
		this.state = {
			overlayOn: false,
			isMenuOpen: false,
			isMenuClosed: false,
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

	componentDidMount() {
		this.addEventListener(EVENTS.openMenu, this.onOpenMenu);
		this.addEventListener(EVENTS.closeMenu, this.onCloseMenu);
		this.addEventListener('click', this.onOverlay);
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
					path="${APP_ROUTES.blogPage}" 
					component="gastro-blog-page"
					title="Blog Page"
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

