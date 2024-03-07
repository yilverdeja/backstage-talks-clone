let countRange = { min: 1, max: 7 };
let count = countRange.max;

// cache body and issue elements
const bodyElement = document.querySelector('body');
const issues = Array.from({ length: countRange.max }, (_, i) =>
	document.getElementById(`issue${i + 1}`)
);

const applyClassToBody = (newCount) => {
	// remove all issue classes
	bodyElement.classList.remove(
		...Array.from({ length: countRange.max }, (_, i) => `issue${i + 1}`)
	);
	// add new issue class
	bodyElement.classList.add(`issue${newCount}`);
};

const scrollToIssue = (newCount) => {
	issues[newCount - 1].scrollIntoView({ behavior: 'smooth' });
};

const updateCountAndScroll = (delta) => {
	// adjust count within the min and max range
	const newCount = Math.min(
		Math.max(count + delta, countRange.min),
		countRange.max
	);

	if (newCount !== count) {
		count = newCount;
		applyClassToBody(count);
		scrollToIssue(count);
	}
};

bodyElement.onwheel = _.debounce(
	(event) => {
		updateCountAndScroll(event.deltaY > 0 ? -1 : 1);
	},
	200,
	{ leading: true }
);

document.onkeyup = (e) => {
	if (e.key === 'ArrowUp') {
		updateCountAndScroll(1);
	} else if (e.key === 'ArrowDown') {
		updateCountAndScroll(-1);
	}
};
