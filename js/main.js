let count = 7;
let bodyElement = document.getElementById('body');

const scrollSection = (event) => {
	if (event.deltaY > 0 && count > 1) count -= 1;
	else if (event.deltaY < 0 && count < 7) count += 1;
	else return;
	scrollToCount();
	bodyElement.classList.remove(
		'issue1',
		'issue2',
		'issue3',
		'issue4',
		'issue5',
		'issue6',
		'issue7'
	);
	bodyElement.classList.add(`issue${count}`);
};

const debounce = function (fn, d) {
	let timer;
	return function () {
		let context = this;
		let args = arguments;
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(context, args);
		}, d);
	};
};

bodyElement.onwheel = _.debounce(scrollSection, 200, { leading: true });

document.onkeyup = (e) => {
	if (e.key === 'ArrowUp' && count < 7) count += 1;
	else if (e.key === 'ArrowDown' && count > 1) count -= 1;
	else return;
	scrollToCount();
	bodyElement.classList.remove(
		'issue1',
		'issue2',
		'issue3',
		'issue4',
		'issue5',
		'issue6',
		'issue7'
	);
	bodyElement.classList.add(`issue${count}`);
};

const issue7 = document.getElementById('issue7');
const issue6 = document.getElementById('issue6');
const issue5 = document.getElementById('issue5');
const issue4 = document.getElementById('issue4');
const issue3 = document.getElementById('issue3');
const issue2 = document.getElementById('issue2');
const issue1 = document.getElementById('issue1');

const scrollToCount = () => {
	if (count === 7) issue7.scrollIntoView({ behavior: 'smooth' });
	if (count === 6) issue6.scrollIntoView({ behavior: 'smooth' });
	if (count === 5) issue5.scrollIntoView({ behavior: 'smooth' });
	if (count === 4) issue4.scrollIntoView({ behavior: 'smooth' });
	if (count === 3) issue3.scrollIntoView({ behavior: 'smooth' });
	if (count === 2) issue2.scrollIntoView({ behavior: 'smooth' });
	if (count === 1) issue1.scrollIntoView({ behavior: 'smooth' });
};
