const emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
    'invalid-email',
    'user@invalid.',
    'user@.com',
    'user@@example.com'
];

const validEmails = emails.filter(email => {
    // Expresión regular para validar emails según el estándar RFC 5322
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Verifica si el email es válido y si no contiene una cadena de texto de subadressing
    return regex.test(email) && !/\+.*@/.test(email);
});

console.log(validEmails);
  // Salida: ["user@example.com"]

//otra forma
const emailRegex= /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/
const emails2 = [
    'john.doe@example.com',
    'me@hotmail.com',
    'me+john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net',
    'invalid-email',
    'user@invalid.',
    'user@.com',
    'user@@example.com'
]

const filterEmails= email=>email.match(emailRegex);
const mapEmails=email=>{
    const [fullEamil, subaddressing]= email.match(emailRegex);
        //console.log(subaddressing);
        if (subaddressing){
            return fullEamil.replace(subaddressing, "")
        }
        return fullEamil
}

emails2.filter(filterEmails).map(mapEmails)
//salida  ['john.doe@example.com', 'me@hotmail.com', 'me@example.com', 'jane_doe@example.org', 'charlie.brown@example.io', 'emily.watson@example.net']
emails2.filter(email=>email.match(emailRegex))
//salida ['john.doe@example.com', 'me@hotmail.com', 'me+john.doe@example.com', 'jane_doe+shopping@example.org', 'charlie.brown+newsletter@example.io', 'emily.watson+notes@example.net']