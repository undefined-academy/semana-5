// "palabra".match(/pala/g)

const emails = ["email1", "email2", "email3"];
const emailsGuille = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
];

// Comprobando si hay match
// function clearEmail(email) {
//    if ((email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/))) {
//     return console.log(`"match" ${email}`);
//   } else {
//     return console.log(`"NO MATCH" ${email}`);
//   }
// }

function clearEmail(email) {
  if (email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
    // return console.log(`"match" ${email}`);
    return email;
  } else if (
    email.match(
      /^[_a-zA-Z0-9-]+(.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(.[a-zA-Z0-9-]+)*(.[a-zA-Z]{2,3})$/
    )
  ) {
    // incluye casos como nombre o nombre_algo o nombre.algo
    const stringpre = email.match(/^[_a-zA-Z0-9-]+[._a-z]+/);

    // incluye casos como @domain.com o @domain.com.uk
    const domain = email.match(
      /@[\w-]+\.+[a-zA-Z]{2,7}(?:.[a-zA-Z]{2,7})|@[\w-]+\.+[a-zA-Z]{2,7}/
    );

    const emailtransformado = `${stringpre}${domain}`;

    // return console.log(`"TIENE SUBADRESSING" el pre es "${stringpre}" y el dominio es "${domain}" de ${email}`);
    // return console.log(`${email} pasa a "${emailtransformado}"`);
    return emailtransformado;
  }
}

const verificarEmails = emailsGuille.map(clearEmail);

console.log(verificarEmails);
