// Crear una funcionalidad que lea una lista de correos y 
// filtre los correos validos y remueva la cadena de texto de subaddresing.
const REGEX =
  /^[\w-]+([\.|\+][\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const correosElectronicos = [
  "john.doe@example.com",
  "jane_doe+shopping@example.org",
  "alice.smith+work@example.co.uk",
  "charlie.brown+newsletter@example.io",
  "emily.watson+notes@example.net",
];

function validarCorreos(correos) {
  return correos
    .filter((correo) => REGEX.test(correo))
    .map((correo) => correo.replace(/\+.*(?=@)/g, ""));
}

console.log(validarCorreos(correosElectronicos));