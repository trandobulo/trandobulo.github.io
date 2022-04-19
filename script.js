"use strict"

let counterBreakPoint = 0;

function confirmForm(){
    event.preventDefault();

    let date = '';
    if (counterBreakPoint == 1){
        date = `Дата тренировки: ${chooseDate.toLocaleString('ru-Ru')}`
    }

    let info=
    `Вы ввели следующие данные:

    Ваше имя: ${feedbackform.name.value} 
    Ваш телефон: ${feedbackform.phone.value} 
    Ваше сообщение: ${feedbackform.msg.value} 
    ${date}

Отправить?`;

    if (confirm(info)){ sendForm(); } else { alert('Отправка отменена');}
}

function readFile(input){

    let file = input.files[0];

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(){document.getElementById('msg').innerHTML = reader.result;}
}

function saveFile(){

    let link = document.createElement('a');
    link.download = "textform.txt";
    let file = new File([document.getElementById('msg').value], {type: "text/plain"});
    link.href = URL.createObjectURL(file);

    if (document.getElementById('msg').value == ''){
        alert('Форма пустая')}
    else {link.click();
        URL.revokeObjectURL(link.href);
    }
}

function sendForm(){
    event.preventDefault();

    formbutton.setAttribute('disabled','disabled'); // Деактивация кнопки "Отправить" на 3 сек после нажатия //

    const form = document.forms.feedbackform;


    let user = { 
        service_id: "service_it9lsv4",
        user_id: "8-9J1lUVt13oYhM-q",
        template_id: "feedbackform",
        template_params: {
            name: form.name.value,
            phone: form.phone.value,
            msg: form.msg.value,
        }
    }

    if (counterBreakPoint == 1){
        user.template_params.date =`Желаемая дата тренировки ${chooseDate.toLocaleString('ru-Ru')}`
    }

    

    let resp = fetch ('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })

    
    .then(function(response){
        if (!response.ok){
            alert('Ошибка отправки. Обновите страницу и попробуйте еще раз')} 
        else {
            postDone();
            }
        
    })

    function postDone(){
    
        alert("Ваши данные успешно отправлены");
        if (counterBreakPoint == 1){
            counter();
            setInterval (counter, 1000);
            counterBreakPoint = 2;
            document.getElementById('bookbutton').setAttribute('disabled','disabled');
        }
        formbutton.removeAttribute('disabled');
    }
}

let currentDate;
let chooseDate;

let text;
let time;

let msPerDay = 24*60*60*1000;
let msPerHour = 60*60*1000;
let msPerMinut = 60*1000;

function present(){
    if (counterBreakPoint == 0){
        currentDate = new Date();
        chooseDate = new Date(document.getElementById('date').value);

        time = chooseDate - currentDate;

        text = document.createElement('p');
        text.className = "counter";

            document.getElementById('trainingform').append(text);

        //Проверка на наличие предыдущих вычислений

        if (chooseDate == 'Invalid Date'){
            
            alert('Укажите дату и время для записи');
            return;

            } else if (time < 0){

            alert('Хорошая попытка, но в прошлое не вернуться');
            return;

            } else if (time < 12*msPerHour){

            alert("Можно выбрать время не раньше, чем через 12 часов с текущего момента");
            return;
        }

        counterBreakPoint = 1;

        document.getElementById('formbutton').click();
    } else {
       alert (`У вас уже есть запись на ${chooseDate.toLocaleString('ru-Ru')}`);
    }
}

function counter(){

    let days = 0;
    time >= msPerDay ? days = Math.trunc(time/msPerDay) : days = 0;

    let hours = 0;
    let hoursleft = time - days*msPerDay;
    hoursleft >= msPerHour ? hours = Math.trunc(hoursleft/msPerHour) : hours = 0;

    let minutes = 0;
    let minutesleft = time - days*msPerDay - hours*msPerHour;
    minutesleft >= msPerMinut ? minutes = Math.trunc(minutesleft/msPerMinut) : minutes = 0;

    let seconds = 0;
    let secondsleft = time - days*msPerDay - hours*msPerHour - minutes*msPerMinut;
    secondsleft >= 1000 ? seconds = Math.trunc((secondsleft)/1000) : seconds = 0;

    text.innerHTML = `&#9989; Запись прошла успешно!<br>
    До тренировки осталось <b> ${days} дн. ${hours} ч. ${minutes} мин. ${seconds} сек. </b>`;


    time -= 1000;
}
