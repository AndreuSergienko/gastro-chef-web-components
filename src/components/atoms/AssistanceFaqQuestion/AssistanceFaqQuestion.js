import './AssistanceFaqQuestion.scss'
import { Component } from '../../../core'
import { APP_EVENTS } from '../../../constants'

export class AssistanceFaqQuestion extends Component {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ['question', 'answer', 'is-open', 'index']
    }

    onClick() {
        this.dispatch(APP_EVENTS.openQuestion, {
            activeIndex: +this.props.index
        })
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
        <div class="assistance__faq-question ${JSON.parse(this.props['is-open']) ? 'open' : ''}">
            <div class="assistance__faq-question-btn-group">
                <span class="assistance__faq-question-text">
                    ${this.props.question}
                </span>
                <button class="assistance__faq-question-open-btn">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            ${JSON.parse(this.props['is-open']) ? `
            <div
                class="assistance__faq-question-answer"
            >
                <span>${this.props.answer}</span>
            </div>
            ` : ''}
        </div>
        `
    }
}

customElements.define('gastro-faq-question', AssistanceFaqQuestion)