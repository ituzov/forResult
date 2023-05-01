import {getTodayDateFormat} from "../core/utils/date.mjs";

export default class UpdateDonateContainer {
    constructor(formInstance) {
        this.formIstance = formInstance;
        this.donateContainer = document.querySelector('.donates-container__donates');
        this.init();
    }

    createDonateItem(valueDonate){
        const donateItem = document.createElement("div");
        donateItem.className = 'donate-item';
        donateItem.innerText = getTodayDateFormat();

        const donate = document.createElement('b')
        donate.innerText = ` - ${valueDonate}$`

        donateItem.append(donate);

        return donateItem;
    }

    addDonate(valueDonate){
    this.donateContainer.append(this.createDonateItem(valueDonate));
    }

    init(){
        this.formIstance.formElement.addEventListener('form-value-update', (event) =>{
            this.addDonate(event.detail.value);
        })
    }

}