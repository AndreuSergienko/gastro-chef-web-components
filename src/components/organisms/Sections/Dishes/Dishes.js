import { Component } from '../../../../core';
import './Dishes.scss';
import '../../../molecules/DishesSwiper';

export class Dishes extends Component {
    constructor() {
        super();
        this.state = {
            slides: [
                {
                    img: {
                        src: 'dishes-01.jpg',
                        alt: 'Dish'
                    },
                },
                {
                    img: {
                        src: 'dishes-02.jpg',
                        alt: 'Dish'
                    },
                },
                {
                    img: {
                        src: 'dishes-03.jpg',
                        alt: 'Dish'
                    },
                },
                {
                    img: {
                        src: 'dishes-04.jpg',
                        alt: 'Dish'
                    },
                },
            ]
        }
    }

    render() {
        return `
        <section class="dishes">
            <h2 class="dishes__title">Фото блюд</h2>

            <gastro-dishes-swiper
                classname="dishesSwiper"
                slides='${JSON.stringify(this.state.slides)}'
            >
            </gastro-dishes-swiper>

        
            <div
                class="dishes__circle-md--transparent dishes__circle-md--transparent--01"
            >
            </div>
            <div
                class="dishes__circle-md--transparent dishes__circle-md--transparent--02"
            >
            </div>
        </section>  
        `
    }
}

customElements.define('gastro-dishes', Dishes);