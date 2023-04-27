// Crear una funcionalidad que lea una lista de correos y
// filtre los correos validos y 
//remueva la cadena de texto de subaddresing.

// 1 = Crear una lista de emails

const emailList = [
    "john.doe@example.com", 
    "john.doe@freemail.com",  
    "jane_doe+shopping@example.com", 
    "alice.smith+work@example.co.uk", "charlie.brown+newsletter@example.io", "emily.watson+notes@example.net"]
  
  // 2 = Crear una funcion que filtre correos validos
  
  function filterValidEmails(emails){
    const emailPattern = /^[a-zA-Z0-9.'*+^_-]+@[a-z]+(.[a-z0-9-]+)*$/;
    const validEmails = [];
      for(let i = 0; i <= emailList.length; i++){
        const email = emailList[i];
          if (emailPattern.test(email) && email.includes('example')){
          console.log("Correo electronico valido");
          const validEmail = email.replace(/\+.*(?=@)/, '');
            validEmails.push(validEmail);
      } else {
        console.log("Correo electronico no valido")
      }
    }
    return validEmails;
  }
  
  filterValidEmails()


// VERSION GUILLERMO


const emailRegex = /^[\w.-]+(\+[\w.-]+)?@[\w-]+\.[\w]{2,5}/;

const newMailList = [
  "john.doe.example.com", 
   "me-mail@lucianogarriga.com",  
  "me+netflix@gmail.com",  "joseswitch+youtube@hotmail.com", "fernando+twitch@spacemonkeys.com"]

const filterEmails = email => email.match(emailRegex);
 
const mapEmails = email => {
  const [fullEmail, subaddressing] = email.match(emailRegex)
  if(subaddresing){
    return fullEmail.replace(subaddresing, "")
  }
}
 
email
  .filter(filterEmails)
  .map(mapEmails)