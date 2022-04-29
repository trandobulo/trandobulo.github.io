"use strict"

let counterBreakPoint = 0;

function confirmForm(){
    event.preventDefault();

    let date = '';
    if (counterBreakPoint == 1){
        date = `<b>Дата тренировки:</b> ${chooseDate.toLocaleString('ru-Ru')}`
    }

    let info=
    `<b>Вы ввели следующие данные:</b><br><br>
    <b>Ваше имя:</b> ${feedbackform.name.value}<br>
    <b>Ваш телефон:</b> ${feedbackform.phone.value}<br>
    <b>Ваше сообщение:</b> ${feedbackform.msg.value}<br>
    ${date}
    <br><br>
    Отправить?`;

    popConfirm(info);
    // if (confirm(info)){ sendForm(); } else { popAlert('Отправка отменена');}
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
        popAlert('Форма пустая')}
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

    

    let resp = fetch ('https://api.emailjs.com/api/v1.0/email/sen', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    })

    
    .then(function(response){
        if (!response.ok){
            popAlert('Ошибка отправки. Обновите страницу и попробуйте еще раз')} 
        else {
            postDone();
            }
        
    })

    function postDone(){
    
        popAlert("Ваши данные успешно отправлены");
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
let timeLeft;

function present(){
    if (counterBreakPoint == 0){
        currentDate = new Date();
        chooseDate = new Date(document.getElementById('date').value);

        timeLeft = chooseDate - currentDate; 

        text = document.createElement('p');
        text.className = "counter";

            document.getElementById('trainingform').append(text);


        if (chooseDate == 'Invalid Date'){
            
            popAlert('Укажите дату и время для записи');
            return;

            } else if (timeLeft < 0){

            popAlert('Хорошая попытка, но в прошлое не вернуться');
            return;

            } else if (timeLeft < 12*60*60*1000){

            popAlert("Можно выбрать время не раньше, чем через 12 часов с текущего момента");
            return;
        }

        counterBreakPoint = 1;

        document.getElementById('formbutton').click();
    } else {
       popAlert (`У вас уже есть запись на ${chooseDate.toLocaleString('ru-Ru')}`);
    }
}

function counter(){

    text.innerHTML = `&#9989; Запись прошла успешно!<br>
    До тренировки осталось <b>${moment.duration(timeLeft).format("d дн. h ч. m мин. s сек.")}</b>`;

    timeLeft -= 1000;
}

function popAlert(massage){

    clear();

    $('.textPopAlert').html("&#9888; " + massage);
    $(".popAlert").show().animate({top: '20px'}, hide);
    
    function hide(){

        function popOut(){
            $('.popAlert').fadeOut('slow', clear)
        }

        let timerPopUp;

        return timerPopUp = setTimeout(popOut, 5000);
    }

    function clear(){
        $('.popAlert').hide().css({"top":"0px"});
    }
}

function popConfirm(massage){

    $(".popConfirm").show().animate({top: '20px'});

    $('.textPopConfirm').html(massage);
    $('.popConfirm').show();
    
    $("#cansel").click(hidequik);
    $("#ok").click(hide)

    function hide(){

        popOut();

        function popOut(){

            $('.popConfirm').fadeOut('slow', clear);
        }
        
        function clear(){
            $('.popConfirm').hide().css({"top":"0px"})
        }
    }

    function hidequik(){

        clear();
        
        function clear(){
            $('.popConfirm').hide().css({"top":"0px"})
        }
    }
}