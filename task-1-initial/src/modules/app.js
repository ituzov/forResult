import {getRandomColor} from "../core/utils/utils.mjs";

export default class App {
    initApp() {
        const btn = document.createElement('button');
        btn.className = 'button';
        btn.innerText = 'Изменить цвет страницы';
        document.body.append(btn);

        btn.addEventListener('click', (event) =>{
        document.body.style.backgroundColor = getRandomColor();
        })


    }

}