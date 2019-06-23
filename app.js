const correctAnswers = ['a', 'b', 'a', 'b'];
const form = document.querySelector('.quiz-form');
const resultSection = document.querySelector('#result');

form.addEventListener('submit', event => {
	event.preventDefault();

	let score = 0;
	let answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

	// Compare answers
	answers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 25;
		}
	});

	// Display the score in the inner html
	scrollTo(0, 0);
	resultSection.classList.remove('d-none');

	// Score animation
	let output = 0;
	const displayScore = setInterval(() => {
		const percentage = resultSection.querySelector('span');
		percentage.innerText = `${output}%`;
		if (output === score) {
			clearInterval(displayScore);
		} else {
			output++;
		}
	}, 10);
});

// Reset the score display along with the reset
form.addEventListener('reset', event => {
	resultSection.classList.add('d-none');
});
