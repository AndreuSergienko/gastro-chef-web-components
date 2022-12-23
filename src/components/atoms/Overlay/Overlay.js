import { APP_EVENTS } from "../../../constants";
import { Component } from "../../../core";

export class Overlay extends Component {
    constructor() {
        super();
        this.isShadow = true;
    }

    static get observedAttributes() {
        return ["is-open"];
    }

    toggleClass() {
        if (JSON.parse(this.props["is-open"])) {
            this.classList.add('overlay-parent')
        } else {
            this.classList.remove('overlay-parent')
        }
    }

    onClick(evt) {
        if (evt.target.closest('.overlay-parent')) {
            if (evt.target.closest('.burger__menu')) {
                return;
            }
            this.dispatch(APP_EVENTS.toggleMenu)
        }

    }

    componentDidMount() {
        this.toggleClass()
        this.addEventListener('click', this.onClick)
    }

    componentWillUnmount() {
        this.removeEventListener('click', this.onClick)
    }

    render() {
        return `
    <style>
        @keyframes overlay {
            0% {
                opacity: 0;
                visibility: hidden;
                top: -100%;
            }
            100% {
                opacity: 1;
                visibility: visible;
                top: 0;
            }
        }

        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background: rgba(2, 2, 2, 0.85);
            z-index: 100;
            visibility: hidden;
            animation: overlay 0.3s ease forwards;
        }
    </style>

        <div>
            ${JSON.parse(this.props["is-open"]) ? `
            <div class="overlay"></div> ` : ""
            }
            <slot></slot
        <div>    
    `;
    }
}

customElements.define('gastro-overlay', Overlay);