/*
Ejercicio
Crear una funcionalidad que lea una lista de correos y
filtre los correos validos y remueva la cadena de texto
de sub-addressing.
*/

const emailPattern = /(^[\w]+[\w._+]*)+@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const emails = [
    ".ronny@gmail.com",
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net"
]

const getValidEmailsAndWithoutSubAddressing = emails => emails.filter(email => emailPattern.test(email)).map(email => {
    const emailsParts = email.split("@");
    let [group1, group2] = emailsParts;
    group1 = group1.split("+")[0];
    return group1 + "@" + group2;
})

getValidEmailsAndWithoutSubAddressing(emails).forEach(email => {
    console.log(email)
});