export default class Form {
    static instance;
    #value
constructor() {
    if (Form.instance) {
        return Form.instance;
    }
    Form.instance = this;
    this.formElement = document.querySelector('.donate-form');
    this.inputElement = this.formElement.querySelector('.donate-form__donate-input');
    this.init();
}

init(){
    const updateFormValue = (event) => {
        event.preventDefault();
        this.#value = this.inputElement.value;
        this.formElement.reset();
        const formValueUpdatedEvent = new CustomEvent('form-value-update', {
            detail: { value: this.#value }
        });
        this.formElement.dispatchEvent(formValueUpdatedEvent);
    }

    this.formElement.addEventListener('submit', updateFormValue);

}

    static getInstance() {
        return Form.instance || new Form();
    }

}