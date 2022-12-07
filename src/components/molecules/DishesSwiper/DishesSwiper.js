import './DishesSwiper.scss';
import { Component } from '../../../core';
// ============= Swiper ================
// import Swiper JS
import Swiper, { Autoplay } from 'swiper';
Swiper.use([Autoplay]);
// import Swiper styles
import 'swiper/css';

export class DishesSwiper extends Component {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return ['classname', 'slides']
    }

    initSwiper() {

        const dishesSwiper = new Swiper(`.${this.props.classname}`, {
            // Swiper params (optional)
            loop: true,
            spaceBetween: 20,
            centeredSlides: true,
            speed: 1000,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            // Cursor params (optional)
            grabCursor: true,
            // Free mode
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 1.4,
                    spaceBetween: 30,
                },
                // when window width is >= 375px
                375: {
                    slidesPerView: 1.7,
                    spaceBetween: 30,
                },
                // when window width is >= 475px
                475: {
                    slidesPerView: 1.9,
                    spaceBetween: 30,
                },
                // when window width is >= 576px
                576: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
                },
                // when window width is >= 768px
                768: {
                    slidesPerView: 3.1,
                    spaceBetween: 40,
                },
                // when window width is >= 992px
                992: {
                    slidesPerView: 3.9,
                    spaceBetween: 40,
                },
                // when window width is >= 1200px
                1200: {
                    slidesPerView: 4.9,
                    spaceBetween: 40,
                },
            }
        });
    }

    componentDidMount() {
        this.initSwiper()
    }

    render() {
        return `
        <div class="swiper ${this.props.classname}">        
            <div class="swiper-wrapper">
            ${JSON.parse(this.props.slides).map(({ img }) => (`
                <div class="swiper-slide ${this.props.classname}__slide">
                    <div class="${this.props.classname}__img">
                        <img
                            src="../../../assets/images/dishes/${img.src}"
                            alt="${img.alt}"
                        />
                    </div>   
                </div>
            `)).join('')}
            </div>
        </div>
        `
    }
}

customElements.define('gastro-dishes-swiper', DishesSwiper);