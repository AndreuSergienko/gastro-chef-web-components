import { Component } from "../../../../core";
import './Greet.scss';

export class Greet extends Component {
  constructor() {
    super()
  }

  render() {
    return `
        <section class="greet">
        <div class="container">
          <div class="greet-container">
            <div class="greet__info">
              <h3 class="greet__info-title">
                Здравствуйте! Меня зовут <span>Кобылинский Кирилл</span>, и я являюсь <span>основателем GastroChef</span>.
              </h3>
              <div class="greet__info-about">
                <p class="greet__info-subtitle">
                  Я Мастер Спорта Украины по тяжёлой атлетике, а так же состоял в составе сборной Украины.
                </p>
                <p class="greet__info-subtitle greet__info-subtitle--second">
                  У меня высшее образование национального университета физического воспитания
                  и спорта Украины (НФВСУ), а так же в
                  прошлом я профессиональный фитнес тренер!
                </p>
              </div>
              <p class="greet__info-conclusion">
                И я хочу Вам рассказать побольше о GastroChef.
              </p>
            </div>
          </div>
        </div>
        <div class="greet__circle">
          <img src="./assets/images/slides/03.png" alt="Founder" />
        </div>
      </section>
        `
  }
}

customElements.define('gastro-greet', Greet);