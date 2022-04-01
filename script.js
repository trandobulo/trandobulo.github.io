"use strict"

// function alertform(){
//     event.preventDefault();
//     console.log(event);
//     let info=
// `Ваши ФИО: ${feedbackform.name.value} 
// Ваш телефон: ${feedbackform.phone.value} 
// Ваше сообщение: ${feedbackform.msg.value}`;

// alert(info);
// }

function sendForm(){
    event.preventDefault();
    console.log(event);

    const form = document.forms.feedbackform;

    const user = { 
        service_id: "service_it9lsv4",
        user_id: "8-9J1lUVt13oYhM-q",
        template_id: "feedbackform",
        template_params: {
            name: form.name.value,
            phone: form.phone.value,
            msg: form.msg.value
        }
    }

let response = fetch ('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
    });
    
    alert("Ваши данные успешно отправлены")
}
