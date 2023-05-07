const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,7}$/

const emails = [
  "santana.quin@cantv.com",
  "warsant@hotmail.com",
  "warsant-brave@gmail.com",
  "warsant+correo@gmail.com",
  "john.doe@gmail.com",
  "me+test2@guillermorodas.com",
  "john.doe-gmail.com",
  "john.doe#gmail.com",
  "john.doe@com",
]

const filterEmails = email => email.match(emailRegex);

const mapEmails = email => {
  const [fullEmail, subaddressing]= email.match(emailRegex);
  
  if(subaddressing){
    return fullEmail.replace(subaddressing, "");
  }
  
  return fullEmail;
}

emails
  .filter(filterEmails)
  .map(mapEmails)