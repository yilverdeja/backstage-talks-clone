let count = 7;
let bodyElement = document.getElementById('body');

const scrollSection = (event) => {
	if (event.deltaY > 0 && count > 1) count -= 1;
	else if (event.deltaY < 0 && count < 7) count += 1;
	else return;
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

// function isScrolledIntoView(el) {
//     var rect = el.getBoundingClientRect();
//     var elemTop = rect.top;
//     var elemBottom = rect.bottom;

//     // Only completely visible elements return true:
//     var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
//     // Partially visible elements return true:
//     //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
//     return isVisible;
// }
