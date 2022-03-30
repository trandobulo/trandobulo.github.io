"use strict"

function print(){

    let info=
`Ваши ФИО: ${document.form.name.value} 
Ваш телефон: ${document.form.phone.value} 
Ваше сообщение: ${document.form.msg.value}`;

    alert(info);
}