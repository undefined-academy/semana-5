const emailRegex = /^[\w.]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/

const emails = [
    "angelmijarees@gmail.com",
    "marialbg9+facebook@yahoo.edu",
    "marialbg9+facebookyahoo.e",
    "mijares.angel+2656@bing.co",
    "morbik+18_4@hotmail.org",
    "me@guillermorodas.com"
];




const filterEmails = email => email.match(emailRegex);

const mapEmails = email => {
    const [fullEmail,subaddressing] = email.match(emailRegex);

    if (subaddressing){
        return fullEmail.replace(subaddressing,"")
    }

    return fullEmail
}


//para probar que anda 

emails.filter(filterEmails).map(mapEmails)