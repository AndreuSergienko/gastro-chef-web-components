import './DietDayButton.scss';
import { Component } from '../../../core';
import { APP_EVENTS } from '../../../constants';

export class DietDayButton extends Component {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            'index',
            'content',
            'is-active',
            'classname',
        ];
    }

    onClick() {
        this.dispatch(
            APP_EVENTS.changeDailyMenu,
            { activeDayIndex: +this.props.index }
        )
    }

    componentDidMount() {
        this.addEventListener('click', this.onClick)
    }

    render() {
        return `
        <button
            class="
                ${this.props.classname ?? ''} 
                ${JSON.parse(this.props['is-active']) ?
                'active' : ''}"
        >
            ${this.props.content ?? ''}
        </button>
      `;
    }
}

customElements.define('gastro-diet-day-button', DietDayButton);
