const emailPattern = /^[\w-]+(\.+[\w-]+)*(\++[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
// const email = "john.doe@example.com";
const emails = ["john.doe@example.com",
    "jane_doe+shopping@example.org",
    "alice.smith+work@example.co.uk",
    "charlie.brown+newsletter@example.io",
    "emily.watson+notes@example.net",
    "emily.watsonexample.net",
    "john@"
]

const emailSubadressing = /\++/;
const emailAt = /@+/;

for (email of emails){
    console.log(email)
if (emailPattern.test(email)) {
    console.log("The email address is valid.");
    if (email.search(emailSubadressing) != -1){
        console.log("Removing subadressing...")
        const newEmail = email.replace(email.substring(email.search(emailSubadressing),email.search(emailAt)),"");
        console.log(newEmail);
    }
} else {
    console.log("The email address is invalid.");
}
}

