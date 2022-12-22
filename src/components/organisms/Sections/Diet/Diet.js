import { Component } from "../../../../core";
import './Diet.scss';
import '../../../atoms/Button';
import '../../../atoms/DietModeButton';
import '../../../molecules/DietModeContent';
import { APP_EVENTS } from "../../../../constants";

export class Diet extends Component {
  constructor() {
    super();
    this.state = {
      modesData: [
        {
          title: 'express',
          calories: 800,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 510,
              afterSale: 357,
            },
            {
              dayTitle: '1 день',
              beforeSale: 475,
              afterSale: 390,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 610,
              afterSale: 450,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 720,
              afterSale: 510,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 820,
              afterSale: 480,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 475,
              afterSale: 390,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'slim',
          calories: 1000,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 610,
              afterSale: 423,
            },
            {
              dayTitle: '1 день',
              beforeSale: 756,
              afterSale: 482,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 932,
              afterSale: 485,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 465,
              afterSale: 264,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 859,
              afterSale: 486,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 510,
              afterSale: 280,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'fitness',
          calories: 1300,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 586,
              afterSale: 374,
            },
            {
              dayTitle: '1 день',
              beforeSale: 385,
              afterSale: 285,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 678,
              afterSale: 485,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 958,
              afterSale: 695,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 758,
              afterSale: 486,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 485,
              afterSale: 392,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'balance',
          calories: 1600,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 355,
              afterSale: 974,
            },
            {
              dayTitle: '1 день',
              beforeSale: 466,
              afterSale: 234,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 205,
              afterSale: 354,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 340,
              afterSale: 234,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 978,
              afterSale: 455,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 234,
              afterSale: 568,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'balance +',
          calories: 1800,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 346,
              afterSale: 456,
            },
            {
              dayTitle: '1 день',
              beforeSale: 436,
              afterSale: 678,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 234,
              afterSale: 678,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 588,
              afterSale: 346,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 788,
              afterSale: 345,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 235,
              afterSale: 890,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'strong',
          calories: 2000,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 568,
              afterSale: 789,
            },
            {
              dayTitle: '1 день',
              beforeSale: 235,
              afterSale: 789,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 890,
              afterSale: 234,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 768,
              afterSale: 345,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 679,
              afterSale: 436,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 780,
              afterSale: 234,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
        {
          title: 'maxi',
          calories: 2400,
          priceList: [
            {
              dayTitle: 'Тестовый день',
              beforeSale: 345,
              afterSale: 567,
            },
            {
              dayTitle: '1 день',
              beforeSale: 678,
              afterSale: 234,
            },
            {
              dayTitle: 'от 7 дней',
              beforeSale: 789,
              afterSale: 345,
            },
            {
              dayTitle: 'от 14 дней',
              beforeSale: 789,
              afterSale: 435,
            },
            {
              dayTitle: 'от 30 дней',
              beforeSale: 789,
              afterSale: 456,
            },
            {
              dayTitle: 'Завтрак и ужин',
              beforeSale: 799,
              afterSale: 456,
            },
          ],
          shedule: [
            {
              day: 'пн',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'ср',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'чт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'пт',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'сб',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
            {
              day: 'вс',
              menu: [
                {
                  mealName: 'Завтрак',
                  mealTime: '7:00 - 9:00',
                  dishes: [
                    '- Фриттата с сыром и кабачками',
                  ],
                  portion: [
                    {
                      quantity: 170,
                      unit: 'гр',
                    }
                  ]
                },
                {
                  mealName: '2-й Завтрак',
                  mealTime: '10:00 - 12:00',
                  dishes: [
                    '- Фермерский йогурт',
                    '- Полезное печенье из сухофруктов'
                  ],
                  portion: [
                    {
                      quantity: 200,
                      unit: 'гр',
                    },
                    {
                      quantity: 2,
                      unit: 'шт',
                    },
                  ]
                },
                {
                  mealName: 'Обед',
                  mealTime: '13:00 - 15:00',
                  dishes: [
                    '- Люля-кебаб из индейки',
                    '- Летний салат с маслинами и сыром',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Полдник',
                  mealTime: '16:00 - 17:30',
                  dishes: [
                    '- Творожное суфле с какао и вишей'
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                  ]
                },
                {
                  mealName: 'Ужин',
                  mealTime: '19:00 - 20:00',
                  dishes: [
                    '- Рыбный терен',
                    '- Овощи гриль',
                  ],
                  portion: [
                    {
                      quantity: 100,
                      unit: 'гр',
                    },
                    {
                      quantity: 150,
                      unit: 'гр',
                    },
                  ]
                },
              ]
            },
          ],
        },
      ],
      activeModeIndex: 0,
      outletMode: {
        title: 'express',
        calories: 800,
        priceList: [
          {
            dayTitle: 'Тестовый день',
            beforeSale: 510,
            afterSale: 357,
          },
          {
            dayTitle: '1 день',
            beforeSale: 475,
            afterSale: 390,
          },
          {
            dayTitle: 'от 7 дней',
            beforeSale: 610,
            afterSale: 450,
          },
          {
            dayTitle: 'от 14 дней',
            beforeSale: 720,
            afterSale: 510,
          },
          {
            dayTitle: 'от 30 дней',
            beforeSale: 820,
            afterSale: 480,
          },
          {
            dayTitle: 'Завтрак и ужин',
            beforeSale: 475,
            afterSale: 390,
          },
        ],
        shedule: [
          {
            day: 'пн',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками'
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'вт',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'ср',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'чт',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'пт',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'сб',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
          {
            day: 'вс',
            menu: [
              {
                mealName: 'Завтрак',
                mealTime: '7:00 - 9:00',
                dishes: [
                  '- Фриттата с сыром и кабачками',
                ],
                portion: [
                  {
                    quantity: 170,
                    unit: 'гр',
                  }
                ]
              },
              {
                mealName: '2-й Завтрак',
                mealTime: '10:00 - 12:00',
                dishes: [
                  '- Фермерский йогурт',
                  '- Полезное печенье из сухофруктов'
                ],
                portion: [
                  {
                    quantity: 200,
                    unit: 'гр',
                  },
                  {
                    quantity: 2,
                    unit: 'шт',
                  },
                ]
              },
              {
                mealName: 'Обед',
                mealTime: '13:00 - 15:00',
                dishes: [
                  '- Люля-кебаб из индейки',
                  '- Летний салат с маслинами и сыром',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Полдник',
                mealTime: '16:00 - 17:30',
                dishes: [
                  '- Творожное суфле с какао и вишей'
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                ]
              },
              {
                mealName: 'Ужин',
                mealTime: '19:00 - 20:00',
                dishes: [
                  '- Рыбный терен',
                  '- Овощи гриль',
                ],
                portion: [
                  {
                    quantity: 100,
                    unit: 'гр',
                  },
                  {
                    quantity: 150,
                    unit: 'гр',
                  },
                ]
              },
            ]
          },
        ],
        isActive: false,
      }
    }
  }

  onSwitch({ detail }) {
    this.setState((state) => ({
      ...state,
      activeModeIndex: detail.clickedModeIndex,
      outletMode: {
        ...detail.mode,
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