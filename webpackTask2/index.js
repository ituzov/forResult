import "./index.css";
import LOGO from './assets/JavaScript-logo.png';


const header = document.createElement('h1')
header.innerText = 'I love JavaScript'

const img = document.createElement("img");
img.src = LOGO;

document.body.append(header, img)

console.log('Hello World!');
const fun = (a,b) => {
    console.log(a,b);
}

fun(3,2)