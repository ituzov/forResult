export default class TotalValue {
    constructor(formInstance) {
        this.formIstance = formInstance;
        this.total = document.getElementById('total-amount');
        this.init();
    }

    init(){
        this.formIstance.formElement.addEventListener('form-value-update', (event) =>{
           this.total.innerText = `${Number(this.total.innerText.slice(0,-1)) + Number(event.detail.value)}$`

        })
    }

}