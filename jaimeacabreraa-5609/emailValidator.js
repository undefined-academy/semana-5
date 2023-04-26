function filterEmails(emailList) {
  // expresión regular para hacer coincidir direcciones de correo electrónico válidas
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  // iterar sobre la lista de correo electrónico y filtrar las direcciones de correo electrónico no válidas
  const validEmails = emailList.filter(email => emailRegex.test(email));

  // elimina las subdirecciones de cada dirección de correo electrónico válida
  const filteredEmails = validEmails.map(email => {
    const [local, domain] = email.split('@');
    const filteredLocal = local.split('+')[0];
    return `${filteredLocal}@${domain}`;
  });

  return filteredEmails;
}

const emails = [
  'john.doe@example.com',
  'jane_doe+shopping@example.org',
  'alice.smith+work@example.co.uk',
  'charlie.brown+newsletter@example.io',
  'emily.watson+notes@example.net',
  'invalid-email',
  'another-invalid-email@',
  '@invalid-email.com',
  'invalid-email@.com',
];

const filteredEmails = filterEmails(emails);
console.log(filteredEmails);
