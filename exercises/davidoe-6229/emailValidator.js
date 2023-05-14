const emailregex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/


const emails= ["john.doe@example.com", 
"jane_doe+shopping@example.org", 
"alice.smith+work@example.co.uk", 
"charlie.brown+newsletter@example.io",
"emily.watson+notes@example.net",]


const filterEmails = email => 
email.match(emailregex);

const mapEmails = email => {
    const [fullEmail, subaddressing] =
    email.match(emailregex)

    if (subaddressing) {
        return fullEmail.replace(subaddressing, "")
    }
    return fullEmail
}

console.log(emails.filter(filterEmails).map(mapEmails))



