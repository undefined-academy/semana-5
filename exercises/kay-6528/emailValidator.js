const emails = [
    'john.doe@example.com',
    'jane_doe+shopping@example.org',
    'alice.smith+work@example.co.uk',
    'charlie.brown+newsletter@example.io',
    'emily.watson+notes@example.net'
]

const regexForSubAdressing = /[+][a-z]*/;
const regexForValidEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)/

const filterEmails = email => regexForValidEmail.test(email)
const removeSubAdressing = email => email.replace(regexForSubAdressing, '')

emailsValidated = emails
.map(removeSubAdressing)
.filter(filterEmails)

console.log(emailsValidated)