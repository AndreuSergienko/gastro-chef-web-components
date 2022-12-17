import { Component } from "../../../core";
import '../../../components'

export class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            overlayOn: false,
            isMenuOpen: false,
            isMenuClosed: false,
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

    scrollToTop() {
        window.scroll({
            left: 0,
            top: 0,
        })
    }

    componentDidMount() {
        this.scrollToTop()
    }

    render() {
        return `
            <gastro-hero></gastro-hero>
            <gastro-advantages
                items='${JSON.stringify(this.state.advantagesItems)}'
            >
            </gastro-advantages>
            <gastro-diet></gastro-diet>
            <gastro-dishes></gastro-dishes>
            <gastro-assistance>
            </gastro-assistance>
    `;
    }
}

customElements.define('gastro-home-page', HomePage)