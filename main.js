var email = "mailto:mamishev@uw.edu?"
console.log('have main.js')
console.log(document.querySelector("#email-message").href)
var message;
var subject;
var finalemail;
var subject = "feedback"
var message = "Hi Mamishev"
document.querySelector('#email-message').addEventListener('change', (e) => {
  console.log(e.target.value)
  message = "&body=" + e.target.value
  finalemail = email + subject + message
  document.getElementById("email-button").href = finalemail;
})

document.querySelector('#email-subject').addEventListener('change', (e) => {
  console.log(e.target.value)
  subject = "subject=" + e.target.value
  finalemail = email + subject + message
  document.getElementById("email-button").href = finalemail;
})