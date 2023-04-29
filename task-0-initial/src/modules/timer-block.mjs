import * as DateUtils from '../core/utils/date.mjs'
export default class TimerBlock {
    #date
    #timerContainer
    #timerTextHTML
    constructor(date) {
        this.#date = date;
        this.#timerContainer = document.createElement('div');
        this.#timerTextHTML = document.createElement('h2');
    }

    #getTimeContent() {
        return DateUtils.getPreciseDateDifference(new Date(), this.#date)
    }

    #enableDateUpdate(){
        setInterval(() => {
            this.#timerTextHTML.textContent = this.#getTimeContent();
        }, 1000)
    }

    render(){
        this.#timerContainer.id = 'timer';
        this.#timerTextHTML.className = 'timer-text';
        this.#timerTextHTML.textContent =  this.#getTimeContent();

        const todayDateHTML = document.createElement('div');
        todayDateHTML.className = 'today-date';
        todayDateHTML.textContent = DateUtils.getTodayDateFormat(new Date());

        this.#timerContainer.append(this.#timerTextHTML, todayDateHTML);
        this.#enableDateUpdate();

        return this.#timerContainer
    }
}