import './Assistance.scss'
import { Component } from '../../../../core'
import '../../../molecules/AssistanceOrder'
import '../../../molecules/AssistanceFaq'

export class Assistance extends Component {
    constructor() {
        super()
        this.state = {
            faqItems: [
                {
                    question: 'Как осуществляется доставка правильного питания?',
                    answer: 'Доставка рационов здорового питания осуществляется ежедневно с 6.00 до 10.00 в выбранный Вами часовой диапазон . Время ожидания курьера по адресу составляет 10 мин. Далее курьер едет на следующий адрес. Если Вас не было по адресу или Вы не вышли на связь, пакет повторно может быть доставлен к Вам на такси за Ваш счет или будет списан.'
                },
                {
                    question: 'Можно ли менять время доставки и место?',
                    answer: 'Время и место  доставки здорового питания можно менять до 17.00 каждого дня. После 17.00 отменить, перенести время доставки, или место доставки правильного питания невозможно, и если Вы не примите рацион по указанному раннее времени и адресу, Ваш пакет с рационом здорового питания будет списан.'
                },
                {
                    question: 'Как и в чем приезжает еда?',
                    answer: 'Сбалансированное питание приезжает в индивидуальном пакете с 5 блюдами на день, которые упакованы отдельно в пищевые контейнеры.'
                },
                {
                    question: 'Когда Вы готовите?',
                    answer: 'Здоровое питание готовиться только ночью, перед отправкой к Вам. Таким образом, Вы получаете блюда с пылу с жару!'
                },
                {
                    question: 'Какие продукты Вы используете?',
                    answer: 'Для приготовления рационов питания ипользуются  только сертифицированные продукты от проверенных поставщиков, таким образом мы всегда гарантируем свежесть наших блюд.'
                },
                {
                    question: 'Я буду есть одно и то же?',
                    answer: 'Меню правильного питания разработано на 4 недели без повторения блюд. В 4х недельных рационах более 250 рецептов.'
                },
                {
                    question: 'У меня аллергия на опредёленные продукты',
                    answer: 'Мы заменяем абсолютно Бесплатно до 3 ингредиентов в Вашем рационе, на которые у Вас есть аллергия или непереносимость. Сообщите эту информацию при заказе.'
                },
                {
                    question: 'В какой очередности все есть?',
                    answer: 'К каждому пакету питания прилагается бланк-меню с точными указаниями  временных промежутков приемов пищи и перечнем блюд. А так же на каждом ланчбоксе указано информаци к какому приему пищи относится блюдо.'
                },
                {
                    question: 'Можно ли замораживать программу?',
                    answer: 'Вы можете приостанавливать, замораживать. Ваш абонемент Здорового питания неограниченное количество раз. Но отмена правильного питания на завтра осуществляется  до 17.00 предыдущего дня, если позже, рацион считается списанным.'
                },
            ],
        }
    }

    render() {
        return `
        <section class="assistance">
            <div class="container-02">
                <div class="assistance-container">
                    <gastro-assistance-order
                        parent-class="assistance__order-wrapper"
                    >
                    </gastro-assistance-order>
                    <gastro-assistance-faq
                        parent-class="assistance__faq-wrapper"
                        items='${JSON.stringify(this.state.faqItems)}'
                    >
                    </gastro-assistance-faq>
                </div>
            </div>

            <div class="assistance__circle-md--filled"></div>
        </section>
        `
    }
}

customElements.define('gastro-assistance', Assistance)