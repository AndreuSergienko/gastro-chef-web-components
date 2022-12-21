import './AssistanceFaq.scss';
import { Component } from '../../../core';
import '../../atoms/AssistanceFaqQuestion'
import { APP_EVENTS } from '../../../constants';
import { setParentClass } from '../../../utils';

export class AssistanceFaq extends Component {
    constructor() {
        super();
        this.state = {
            activeQuestionIndex: null,
        }
    }

    static get observedAttributes() {
        return ['items', 'parent-class']
    }

    onOpen({ detail }) {
        this.setState((state) => ({
            ...state,
            activeQuestionIndex:
                state.activeQuestionIndex === detail.activeIndex ? null : detail.activeIndex
        }))
    }

    componentDidMount() {
        setParentClass(this)
        this.addEventListener(APP_EVENTS.openQuestion, this.onOpen)
    }

    render() {
        return `
        <div class="assistance__faq">
            <h3 class="assistance__faq-title">Часто задаваемые вопросы</h3>
            <div class="assistance__faq-questions">
            ${JSON.parse(this.props.items).map(({ question, answer }, index) => (`
                <gastro-faq-question
                    question="${question}"
                    answer="${answer}"
                    index="${index}"
                    is-open="${index === this.state.activeQuestionIndex}"
                >
                </gastro-faq-question>
            `)).join('')}
            </div>
        </div>
        `
    }
}

customElements.define('gastro-assistance-faq', AssistanceFaq);