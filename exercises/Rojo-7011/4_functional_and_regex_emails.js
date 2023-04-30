/*
    Crear una funcionalidad que lea una lista de correos
    y filtre los correos validos
    y remueva la cadena de texto de subaddresing.
*/

const emailPattern = /^[\w.!#$%&’*+\-\/=?\^`{|}~]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/i

// Emails de prueba

const emails = [
    "john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "emily+#@$watson+notes@example.net",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "zboncak.enid@runolfsdottir.net",
    "winfield65@schaden.com",
    "murphy.alexie@kessler.com",
    "stefan29@dickens.info",
    "benny92@johnson.com",
    "gia92+subaddres@ortiz.com",
    "clifton12@upton.com",
    "cconnelly@ortiz.com",
    "bnicolas+fakeemail@hahn.info",
    "kory08@runolfsdottir.com",
    "vwaters+lista1@huels.com",
    "nienow.mozelle@huel.com",
    "kutch.henderson@upton.net",
    "nkuhlman@glover.info",
    "nabshire@rice.com",
    "green.ardith@rice.com",
    "mraz.onie@lueilwitz.com",
    "abdul.kemmer@mueller.biz",
    "conn@@@.brown+thisisnotvalidemail@wilkinson.com",
]

const isEmailValid = email => email.match(emailPattern);

const consoleLog = email => console.log(`${email}`);
const indexOfPlusSymbol = email => email.indexOf("+")
const indexOfArrobaSymbol = email => email.indexOf("@")

const trimSubAddressing = function(email)  {
    hasSubAddressing = indexOfPlusSymbol(email)

    if(hasSubAddressing > 0) {
        plusSymbolIndex = indexOfPlusSymbol(email)
        arrobaSymbolIndex =  indexOfArrobaSymbol(email)

       return email.substring(0, plusSymbolIndex) + email.substr(arrobaSymbolIndex)
    } else {
        return email
    }

}


// Procesamos los emails

emails.filter(isEmailValid)
    .map(trimSubAddressing)
    .map(consoleLog)