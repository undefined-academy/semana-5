function filterMails(emails){
    const emailPattern =  /^[\w\.-]+(\+[\w-]+)*@([\w-]+\.[\w]{2,})(\.[\w]{2,})*/; 
    const filteredEmails = emails.filter(email => emailPattern.test(email)).map(email => email.replace(/(\+[\w-]+)/, ""));
    console.log(filteredEmails)
}

const emails = [
    'john.doe@example.com', 'jane_doe+shopping@example.org','alice.smith+work@example.co.uk','charlie.brown+newsletterexample.io','emily.watson+notes@example.net'
]

filterMails(emails);