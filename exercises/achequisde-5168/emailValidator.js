function validateEmail(email) {
  let validatePattern =
    /^[\w-]+(\.[\w-]+)*(?:\+\w+)?@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  return validatePattern.test(email);
}

function removeSubaddress(email) {
  let subaddressPattern = /\+\w+/;
  return email.split(subaddressPattern).join("");
}

let emailList = [
	"john.doe@example.com",
	"jane_doe+shopping@example.org",
	"alice.smith+work@example.co.uk",
	"charlie.brown+newsletter@example.io",
	"emily.watson+notes@example.net",
];

console.log(emailList.filter(validateEmail).map(removeSubaddress));