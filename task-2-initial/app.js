import './style.css';
const content = document.querySelector('.cookie-consent');
const button = document.querySelector('.cookie-consent__button');
const contentParent = content.parentNode;

button.addEventListener('click', () =>{
    contentParent.removeChild(content);
    localStorage.setItem('cookie-consent', 'true');
});

if (localStorage.getItem('cookie-consent')){
    contentParent.removeChild(content);
}


