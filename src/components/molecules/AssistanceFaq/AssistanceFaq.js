import './AssistanceFaq.scss';
import { Component } from '../../../core';

export class AssistanceFaq extends Component {
    constructor() {
        super()
    }

    render() {
        return `
        <div class="assistance__faq">
        <h3 class="assistance__faq-title">Часто задаваемые вопросы</h3>
        <div class="assistance__faq-questions">
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Как осуществляется доставка правильного питания?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Можно ли менять время доставки и место?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem, ipsum. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Как и в чем приезжает еда?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem, ipsum dolor. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Когда Вы готовите?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem ipsum dolor sit. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Какие продукты Вы используете?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem ipsum dolor sit amet. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Я буду есть одно и то же?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span> Lorem ipsum dolor sit amet consectetur. </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        У меня аллергия на опредёленные продукты
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        В какой очередности все есть?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                        </span>
                    </div>
                </div>
            </div>
            
            <div class="assistance__faq-question">
                <div class="assistance__faq-question-btn-group">
                    <span class="assistance__faq-question-text">
                        Можно ли замораживать программу?
                    </span>
                    <button class="assistance__faq-question-open-btn">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

                <div class="assistance__faq-question-answer">
                    <div class="assistance__faq-question-answer-item">
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cumque.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `
    }
}

customElements.define('gastro-assistance-faq', AssistanceFaq);