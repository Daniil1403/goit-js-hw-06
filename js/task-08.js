document.querySelectorAll(`.login-form`);
login - form.querySelector(`submit`, OnSubmit);
function OnSubmit(evt) {
 evt.preventDefault();
 console.dir(evt.currentTaeget);
 const { email, password } = evt.currentTaeget;
 const data = {
  email: email.value,
  password: password.value,
 };
}
