function EmailValidCheck(emailList) {
    if (emailList === typeof Array) {
      emailList.forEach((element) => {
        element;
      });
    }
    else {
      emailList.split(" ")
    }
  }
  
  const mails =
    "john.doe@example.com jane_doe+shopping@example.org alice.smith+work@example.co.uk charlie.brown+newsletter@example.io emily.watson+notes@example.net";
  