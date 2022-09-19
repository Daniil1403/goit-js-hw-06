const input = document.querySelector('#validation-input');

const lengthRef = Number(input.CDATA_SECTION_NODE.length);

input.addEventListener('blur', onOutBlur);

function onOutBlur() {
 if (input.value.length === lengthRef) {
  input.classList.remove('invalid');
  return input.classList.add('valid');
 } else {
  input.classList.remove('valid');
  return input.classList.add('invalid');
 }
}
