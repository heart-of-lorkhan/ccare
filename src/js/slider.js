export const slider = () => {
	const sliderElement = document.querySelector('.slider__list');
	const sliderTextElement = document.querySelector('.slider__text');

	if (sliderElement && sliderTextElement) {
		setInterval(() => {
			let current = sliderElement.getElementsByClassName('is-active')[0];
			let currentText = sliderTextElement.getElementsByClassName('is-active')[0];
			current.classList.remove('is-active');
			currentText.classList.remove('is-active');
			let next = current.nextElementSibling || sliderElement.firstElementChild;
			let nextText = currentText.nextElementSibling || sliderTextElement.firstElementChild;
			next.classList.add('is-active');
			nextText.classList.add('is-active');
		}, 2000);
	}
};

export default slider;
