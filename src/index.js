
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');

    button.addEventListener('click', () => {
        alert('Button was clicked!');
        console.log('Кнопка спрацювала!');
    });
});