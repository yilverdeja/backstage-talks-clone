// let lastScrollTop = 0;
// window.addEventListener(
// 	'scroll',
// 	() => {
// 		let currentScrollTop = document.documentElement.scrollTop;
// 		console.log(currentScrollTop);
// 		if (currentScrollTop > lastScrollTop) {
// 			alert('down');
// 		} else {
// 			alert('up');
// 		}
// 		lastScrollTop = currentScrollTop;
// 	},
// 	true
// );
let count = 7;
let bodyElement = document.getElementById('body');

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
