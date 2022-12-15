import './Tagline.scss'
import { Component } from '../../../../core'

export class Tagline extends Component {
    constructor() {
        super()
    }

    render() {
        return `
        <section class="tagline">
        <div class="tagline-container">
          <div class="tagline__info">
            <div class="tagline__info-wrapper">
              <h3 class="tagline__info-title">
                «GastroChef - легко для занятых»
              </h3>
              <div class="tagline__info-details">
                <p class="tagline__info-paragraph">
                  GastroChef - правильное питание с доставкой на дом, создано что бы облегчить жизнь, освободить время от готовки, от ненужных перекусов, фастфудов и дать возможность чувствовать себя легко и полным энергии, сил, для новых свершений и побед.
                </p>
                <p class="tagline__info-paragraph">
                  Все продукты для приготовления правильного питания закупаются только с сертификатами, а рационы готовятся на современной и безопасной кухне ночью перед приездом к Вам!
                </p>
              </div>
              <div class="tagline__info-help">
                <p>
                  Друзья, если у Вас остались вопросы Вы с легкостью можете позвонить нам или написать мне лично в Инстаграм или Фейсбук.
                </p>
              </div>
              <div class="tagline__info-conclusion">
                <span>
                  С уважением, Кобылинский Кирилл.
                </span>
              </div>
            </div>
          </div>
          <div class="tagline__img">
            <img src="../../../../assets/images/tagline/dish.png" alt="dish">
          </div>
        </div>
      </section>
        `
    }
}

customElements.define('gastro-tagline', Tagline)