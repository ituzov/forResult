import Form from "./Form.mjs";
import TotalValue from "./total-value.mjs";
import UpdateDonateContainer from "./update-donate-container.mjs";

export default class App {
    constructor() {
    this.form = Form.getInstance();
    this.totalValue = new TotalValue(Form.getInstance());
    this.updateDonateContainer = new UpdateDonateContainer(Form.getInstance());
    }

}