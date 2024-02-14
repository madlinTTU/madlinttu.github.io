const alternatives = [
    {text:"", images:"pilt.JPG"},
    {text:"ПИДР", images:"images/giph1.gif"},
    {text:"Я ВООБЩЕ ТО БЛИНЫ ХОЧУ", images:"images/giph2.gif"},
    {text:"С ПЕРВОЙ ВАЛЕНТИНКОЙ АЙТИ", images:"images/giph4.gif"},
    {text:"СЮДА НЕ ПРИДУМАЛ", images:"images/giph3.gif"}
];
const ohyes = {text:"ТУТ НА ИСПАНСКОМ ТЕКСТ", images:"images/cat-yes.gif"};
const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const buttons = document.querySelectorAll('.button');
const errorButton = document.querySelector('.button__error');
let count = 0;
function updateDisplay(item) {
    console.log(item);
    cat.src = item.images;
    text.innerHTML = item.text;
}

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
     buttons.forEach(btn => btn.style.display = 'inline-block');
    errorButton.style.display = 'none';
});

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent === 'SÍ'){
            updateDisplay(ohyes);
            buttons.forEach(btn => btn.style.display = 'none');
        }
        if (button.textContent === 'NO'){
            count++;
            if(count < alternatives.length){
                updateDisplay(alternatives[count]);
            } else {
                buttons.forEach(btn => btn.style.display = 'none');
                errorButton.style.display = 'inline-block';
            }
        }
    });
});
