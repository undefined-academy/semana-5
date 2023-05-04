function filterEmails(emailsList) {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  
    const filteredEmails = [];
    for (const email of emailsList) {
      if (emailPattern.test(email)) {
        const filteredEmail = email.replace(/\+.*@/, '@');
        filteredEmails.push(filteredEmail);
      }
    }
  
    return filteredEmails;
  }
  
  const myEmails= ["john.doe@example.com", "jane_doe+shopping@example.org", "alice.smith+work@example.co.uk", "charlie.brown+newsletter@example.io", "emily.watson+notes@example.net"];
  const filteredEmails = filterEmails(myEmails);
  
  console.log(filteredEmails); // Output: []
