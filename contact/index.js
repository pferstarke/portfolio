const contact = document.querySelector('#form-contact');
const wholeName = document.querySelector('#txt-name');
const email = document.querySelector('#txt-email');
const message = document.querySelector('#txt-message');
let sentMessage = [];



const userMessage = () => {
	let name = wholeName.value;
	let email = email.value;
	let message = message.value;
	console.log(e.target.value)
}

wholeName.addEventListener('keyup', e => {
	console.log(e.target);
	console.log(e.target.value);
})
email.addEventListener('keyup', e => {
	console.log(e.target);
	console.log(e.target.value);
})
message.addEventListener('keyup', e => {
	console.log(e.target);
	console.log(e.target.value);
})

contact.addEventListener('submit', event => {
	event.preventDefault();

	document.querySelector('#btn-submit').setAttribute('disabled', true);
})