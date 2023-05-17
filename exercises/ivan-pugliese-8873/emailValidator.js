const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/

const emails = [
  "ivanpugliese02@gmail.com",
  "pugliese.ivan@gmail.com",
  "ivanpugliese+twitch@gmail.com",
  "ivanpugliese+youtube@gmail.com",
  "ivanpugliese+hbo@gmail.com",
  "pugliese-ivan@gmail.com"
]

const filterEmails = email => email.match(emailRegex);

const mapEmails = email => {
  const [fullEmail,subaddressing] = email.match(emailRegex);

  if (subaddressing) {
    return fullEmail.replace(subaddressing, "");
  }

  return fullEmail;
}