const form = document.querySelector('form');
const submitBtn = document.querySelector('#submitBtn');

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	const name = document.querySelector('#name').value;
	const email = document.querySelector('#email').value;
	const message = document.querySelector('#message').value;

	if (name === '' || email === '' || message === '') {
		alert('Please fill in all fields.');
	} else {
		alert(`Thank you, ${name}, for your message. We will get back to you soon at ${email}.`);
		form.reset();
	}
});

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}
