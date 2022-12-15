import './Story.scss'
import { Component } from '../../../../core'

export class Story extends Component {
    constructor() {
        super()
    }

    render() {
        return `
        <section class="story">
        <div class="story-container">
          <div class="story__img">
            <img src="../../../../assets/images/story/bag.png" alt="story">
          </div>
          <div class="story__info">
            <div class="story__info-wrapper">
              <h3 class="story__info-title">
                История GastroChef началась более 6-ти лет назад...
              </h3>
              <div class="story__info-details">
                <p class="story__info-paragraph">
                  Долгое время я наблюдал как людям не хватает времени
                  для правильного и здорового питания, какое правильного, просто питания регулярного.
                </p>
                <p class="story__info-paragraph">
                  Они могли позавтракать, в обед съесть что-то типа шаурмы или снэка, а вечером в силу голода наесться, что плохо сказывалось на их обмене веществ и естественно здоровье.
                </p>
                <p class="story__info-paragraph">
                  Желание хоть как-то изменить ситуацию и помочь людям не давало мне покоя и я решил открыть доставку
                  еды правильного питания.
                </p>
                <p class="story__info-paragraph">
                  Я со своим 17-и летним опытом в спорте
                  и проф. образованием, вместе с диетологом разработали рационы правильного питания
                  с подсчетом калорий (КБЖУ).
                </p>
              </div>
              <div class="story__info-conclusion">
                <span>
                  Знакомтесь! Команда GastroChef!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
        `
    }
}

customElements.define('gastro-story', Story);