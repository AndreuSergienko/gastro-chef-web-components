import './Hero.scss';
import { Component } from '../../../../core';
import '../../../molecules/Swiper';

export class Hero extends Component {
	constructor() {
		super();
		this.state = {
			slides: [
				{
					title: 'Detox программа – <span>вкусное очищение</span> организма',
					subtitle: '8 бутылочек <span>натуральных</span> смузи и фрешей.',
					btncontent: 'Заказать',
					subinfo: {
						text: 'Пробный день всего:',
						price: '427 грн',
					},
					src: '01.png',
				},
				{
					title:
						'Сервис правильного питания. <br /> <span>Худей быстро!</span>',
					btncontent: 'Заказать',
					subinfo: {
						text: 'Пробный день',
						price: '-30%',
					},
					src: '02.png',
				},
				{
					title:
						'<span>Доверьтесь профессионалам.</span> <br /> Я Кобылинский Кирилл - основатель.',
					subtitle:
						'<span>Мастер спорта</span> Украины по тяжелой атлетике. <br /> <span>Высшее образование</span> института <br /> физкультуры(НуфвсУ).',
					btncontent: 'Мой инстаграм',
					subinfo: {
						text: 'Всегда открыт <br /> для клиентов',
					},
					src: '03.png',
				},
				{
					title:
						'Кето питание - <span>вкусное и экстремальное</span> быстрое похудение',
					subtitle: '4 приема пищи.',
					btncontent: 'Заказать',
					subinfo: {
						text: 'Пробный день от:',
						price: '490 грн',
					},
					src: '04.png',
				},
			],
		};
	}

	render() {
		return `
        <gastro-swiper
            slides='${JSON.stringify(this.state.slides)}'
            swiperclassname="heroSwiper"
        >
        </gastro-swiper>
        `;
	}
}

customElements.define('gastro-hero', Hero);
