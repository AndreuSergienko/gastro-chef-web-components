import { Component } from '../../../core';
import './DietModeContent.scss';
import '../../atoms';
import '../../molecules';
import { APP_EVENTS } from '../../../constants';

export class DietModeContent extends Component {
  constructor() {
    super();
    this.state = {
      shedule: [],
      outletMenuDay: {},
      activeDayIndex: 0,
    }
  }

  static get observedAttributes() {
    return ['mode']
  }

  initOutletDailyMenu({ shedule }) {
    this.setState((state) => {
      return {
        ...state,
        shedule: shedule,
        outletMenuDay: {
          ...shedule[this.state.activeDayIndex]
        }
      }
    })
  }

  onMenuChange({ detail }) {
    this.setState((state) => {
      return {
        ...state,
        outletMenuDay: {
          ...state.shedule[detail.activeDayIndex]
        },
        activeDayIndex: detail.activeDayIndex
      }
    })
  }

  componentDidMount() {
    this.initOutletDailyMenu(JSON.parse(this.props.mode))
    this.addEventListener(APP_EVENTS.changeDailyMenu, this.onMenuChange)
  }

  componentWillUnmount() {
    this.removeEventListener(APP_EVENTS.changeDailyMenu, this.onMenuChange)
  }

  render() {
    const {
      title, calories, priceList, shedule
    } = JSON.parse(this.props.mode);

    return `
      <div class="diet__modes-content">
        <div class="diet__modes-content-item">
          <gastro-diet-mode-info
            parent-class="diet__modes-content-info-wrapper"
            title="${title}"
            calories="${calories}"
            price-list='${JSON.stringify(priceList)}'
          >
          </gastro-diet-mode-info>
          <gastro-diet-mode-shedule
            parent-class="diet__modes-content-shedule-wrapper"
            shedule='${JSON.stringify(shedule)}'
            outlet-menu-day='${JSON.stringify(this.state.outletMenuDay)}'
            active-day-index="${this.state.activeDayIndex}"
          >
          </gastro-diet-mode-shedule>
          
        </div>
      </div>
        `
  }
}

customElements.define('gastro-diet-mode-content', DietModeContent);