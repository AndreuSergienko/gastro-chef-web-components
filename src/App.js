import { Component } from './core';
import './components';
import { EVENTS } from './constants';

export class App extends Component {
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
			advantagesItems: [
				{
					img: {
						modifier: 'save-nature',
						src: '01.svg',
						alt: 'Save Nature'
					},
					info: 'Бережём природу. Эко-тара и проборы.',
				},
				{
					img: {
						modifier: 'no-repeating',
						src: '02.svg',
						alt: 'No Repeating Dishes'
					},
					info: '28 дней без повторения, более 300 блюд!',
				},
				{
					img: {
						modifier: 'free-change',
						src: '03.svg',
						alt: 'Free Dishes Change'
					},
					info: 'Бесплатно заменяем блюда и ингредиенты.',
				},
				{
					img: {
						modifier: 'anytime',
						src: '04.svg',
						alt: 'Cooking At Anytime'
					},
					info: 'Готовим ночью, упаковываем и отправляем Вам!',
				},
				{
					img: {
						modifier: 'track',
						src: '05.svg',
						alt: 'Provide Convenient Delivery'
					},
					info: 'Ежедневная удобная и бесплатная доставка с 6:00 до 10:00',
				},
				{
					img: {
						modifier: 'save-energy',
						src: '06.svg',
						alt: 'Save Your Energy'
					},
					info: 'Сохраняем Вашу энергию и до 14 часов в неделю освобождая от готовки!',
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
			<gastro-header></gastro-header>
			<gastro-burger-menu
				isopen="${this.state.isMenuOpen}"
				isclosed="${this.state.isMenuClosed}"
			>
			</gastro-burger-menu>
			<gastro-aside
				items='${JSON.stringify(this.state.asideItems)}'
			>
			</gastro-aside>
			<gastro-hero></gastro-hero>
			<gastro-advantages
				items='${JSON.stringify(this.state.advantagesItems)}'
			>
			</gastro-advantages>
			<gastro-diet></gastro-diet>


			<div
				class="overlay ${this.state.overlayOn ? 'overlay-on' : ''}"
			>
			</div>
      `;
	}
}

customElements.define('gastro-app', App);
