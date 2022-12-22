import { Component } from "../../../../core";
import './Diet.scss';
import '../../../atoms/Button';
import '../../../atoms/DietModeButton';
import '../../../molecules/DietModeContent';
import { APP_EVENTS } from "../../../../constants";
import { modesData } from './modesData'

export class Diet extends Component {
  constructor() {
    super();
    this.state = {
      modesData: modesData,
      activeModeIndex: 0,
      outletMode: {
        ...modesData[0],
        isActive: false,
      }
    }
  }

  onSwitch({ detail }) {
    this.setState((state) => ({
      ...state,
      activeModeIndex: detail.clickedModeIndex,
      outletMode: {
        ...modesData[detail.clickedModeIndex],
        isActive: true,
      },
    }))
  }

  componentDidMount() {
    this.addEventListener(APP_EVENTS.switchMode, this.onSwitch)
  }

  render() {
    return `
    <section class="diet">
    <div class="container">
      <div class="diet-container">
        <div class="diet__tabs-btns">
          <gastro-button 
            parent-class="diet__tabs-tab"
            classname="diet__tabs-btn" 
            content="Программы питания"
          >
          </gastro-button>
          <gastro-button
            parent-class="diet__tabs-tab"
            classname="diet__tabs-btn"
            content="Специальные программы"
          >
          </gastro-button>
        </div>

        <div class="diet__modes">
          <div class="diet__modes-btns">
          ${this.state.modesData.map((mode, index) => (`
            <gastro-diet-mode-button
              parent-class='diet__modes-mode'
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