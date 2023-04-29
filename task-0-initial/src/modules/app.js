import JsBlock from "./js-block.mjs";
import TimerBlock from "./timer-block.mjs";
import {JS_CREATION_DATE} from "../core/constants/settings.mjs";

export default class App {
    #jsBlock
    #timerBlock
constructor() {
    this.#jsBlock = new JsBlock();
    this.#timerBlock = new TimerBlock(JS_CREATION_DATE);
    }

    run(){
        const jsBlockHTML = this.#jsBlock.render();
        const timerBlockHTML = this.#timerBlock.render();
        document.body.append(jsBlockHTML, timerBlockHTML);
    }

}