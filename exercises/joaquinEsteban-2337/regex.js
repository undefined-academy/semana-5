
// let email =[{nombre:"shopping",email:"shopping@example.orgalice.smith"},
// {nombre:"charlie",email:"work@example.co.ukcharlie.brown"},{nombre:"emily",email:"newsletter@example.ioemily.watson"},
// {nombre:"notes",email:"notes@example.net"}];

const email =[{nombre:"john",email:"john_doe@comjan.com"}];

const email2 = email.map(x => x.email)
// console.log(email2)

function emailValidator(email){
  const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{2,7}$/gm
  
  if(emailPattern.test(email)){
    console.log('Correo Validado')
  }else{
    console.log('Correo Invalido')
  }
}

emailValidator(email2)

