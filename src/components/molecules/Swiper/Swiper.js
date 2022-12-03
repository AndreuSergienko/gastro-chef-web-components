import { Component } from '../../../core';
import '../../atoms/Button';
import Swiper, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Swiper.scss';

export class MySwiper extends Component {
	constructor() {
		super();
	}

    initSwiper() {
        Swiper.use([EffectFade, Autoplay])

        const swiper = new Swiper(`.${this.props.swiperclassname}`, {
            modules: [Navigation, Pagination],
            loop: true,
            effect: 'fade',
            allowTouchMove: false,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        
            fadeEffect: {
                crossFade: true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    speed: 700
                },
                1200: {
                    speed: 600
                }
            }
        });        
    }

    componentDidMount() {
        this.initSwiper()
    }

	static get observedAttributes() {
		return ['slides', 'swiperclassname'];
	}

	render() {
		return `
        <div class="swiper ${this.props.swiperclassname}">
            <div class="swiper-wrapper">
                ${JSON.parse(this.props.slides).map(
							(slide, index) =>
								`
                    <div class="swiper-slide">
                        <div class="${this.props.swiperclassname}-slide slide-0${index + 1}">
                            <div class="container slide-container">
                                <div class="${this.props.swiperclassname}-slide__info">
                                    <h3 class="${this.props.swiperclassname}-slide__info-title">
                                        ${slide.title}
                                    </h3>
                                    ${slide.subtitle ? 
                                        `
                                        <p class="${this.props.swiperclassname}-slide__info-subtitle">                
                                            ${slide.subtitle}
                                        </p>
                                        `
                                        :
                                        ''
									}
                                    <div class="${this.props.swiperclassname}-slide__info-bottom">
                                        <gastro-button
                                            classname="${this.props.swiperclassname}-slide__info-btn primary-button"
                                            content="${slide.btncontent}"
                                        >
                                        </gastro-button>
                                        <p class="${this.props.swiperclassname}-slide__info-test">
                                            ${slide.subinfo.text}
                                            ${
											    slide.subinfo.price	?
                                                `<span class="${this.props.swiperclassname}-slide__info-test-price">${slide.subinfo.price}</span>`
													: 
                                                ''
											}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="${this.props.swiperclassname}-slide__circle-img circle-img-bg-${index + 1}">
                                <img src="../../../assets/images/slides/${slide.src}" alt="Slide" />
                            </div>
                        </div>
                    </div>            
                            `
				).join('')}
            </div>
        
            <div class="swiper-pagination"></div>

        
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
        `;
	}
}

customElements.define('gastro-swiper', MySwiper);
