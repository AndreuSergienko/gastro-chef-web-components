import { Component } from "../../../../core";
import './Diet.scss';
import '../../../atoms/Button';
import '../../../atoms/DietModeButton';
import '../../../molecules/DietModeContent';
import { EVENTS } from "../../../../constants";

export class Diet extends Component {
  constructor() {
    super();
    this.state = {
      modesData: [
        {
          title: 'express',
          calories: 800,
        },
        {
          title: 'slim',
          calories: 1000,
        },
        {
          title: 'fitness',
          calories: 1300,
        },
        {
          title: 'balance',
          calories: 1600,
        },
        {
          title: 'balance +',
          calories: 1800,
        },
        {
          title: 'strong',
          calories: 2000,
        },
        {
          title: 'maxi',
          calories: 2400,
        },
      ],
      activeModeIndex: 0,
      outletMode: {
        title: 'express',
        calories: 800,
        isActive: false,
      }
    }
  }

  onSwitch({ detail }) {
    this.setState((state) => ({
      ...state,
      activeModeIndex: detail.clickedModeIndex,
      outletMode: {
        ...state.outletMode,
        ...detail.mode,
        isActive: true,
      },
    }))
  }

  componentDidMount() {
    this.addEventListener(EVENTS.switchMode, this.onSwitch)
  }

  render() {
    return `
    <section class="diet">
    <div class="container">
      <div class="diet-container">
        <div class="diet__tabs-btns">
          <gastro-button classname="diet__tabs-btn" content="Программы питания">
          </gastro-button>
          <gastro-button
            classname="diet__tabs-btn"
            content="Специальные программы"
          >
          </gastro-button>
        </div>

        <div class="diet__modes">
          <div class="diet__modes-btns">
          ${this.state.modesData.map((mode, index) => (`
            <gastro-diet-mode-button
              mode='${JSON.stringify(mode)}'
              index='${index}'
              isactive='${index === this.state.activeModeIndex ? true : false}'
            >
            </gastro-diet-mode-button>
          `)).join('')}             
          </div>
          
          <gastro-diet-mode-content
            mode='${JSON.stringify(this.state.outletMode)}'
          >
          </gastro-diet-mode-content>
        </div>
      </div>
    </div>

    <div class="diet__circle-md--filled"></div>
    <div class="diet__circle-md--transparent"></div>
  </section>
  `
  }
}

customElements.define('gastro-diet', Diet);