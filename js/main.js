if ('scrollRestoration' in history) {
	history.scrollRestoration = 'manual';
}

let countRange = { min: 1, max: 7 };
let count = countRange.max;

// cache elements
const bodyElement = document.querySelector('body');
const wrapperElement = document.querySelector('.fullpage-wrapper');
const issues = Array.from({ length: countRange.max }, (_, i) =>
	document.getElementById(`issue${i + 1}`)
);
const navLinks = Array.from({ length: countRange.max }, (_, i) =>
	document.getElementById(`nav${i + 1}`)
);

const setNavLinkActive = (newCount) => {
	navLinks.forEach((navLink, index) => {
		navLink.classList.remove('nav--active');
		if (newCount === index + 1) {
			navLink.classList.add('nav--active');
		}
	});
};

var hamburger = document.querySelector('.hamburger');
var navigation = document.querySelector('.navigation');

const applyClassToWrapper = (newCount) => {
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
		applyClassToWrapper(count);
		scrollToIssue(count);
		setNavLinkActive(count);
	}
};

const updateCountAndScrollV2 = (thisCount) => {
	const newCount = Math.min(
		Math.max(thisCount, countRange.min),
		countRange.max
	);

	if (newCount !== count) {
		count = newCount;
		applyClassToWrapper(count);
		scrollToIssue(count);
		setNavLinkActive(count);
	}

	navigation.classList.remove('open');
};

// bind hamburger menu
hamburger.addEventListener('click', function () {
	navigation.classList.toggle('open');
});

// nav links on click bind
navLinks.forEach((navLink, index) => {
	navLink.onclick = () => {
		updateCountAndScrollV2(index + 1);
	};
});

// desktop control
wrapperElement.onwheel = _.debounce(
	(event) => {
		updateCountAndScroll(event.deltaY > 0 ? -1 : 1);
	},
	400,
	{ leading: true }
);

// mobile control
var touchStart;
wrapperElement.ontouchstart = (event) => {
	touchStart = event.touches[0].clientY;
};

wrapperElement.ontouchend = (event) => {
	var touchEnd = event.changedTouches[0].clientY;
	if (touchStart > touchEnd + 5) {
		updateCountAndScroll(-1);
	} else if (touchStart < touchEnd - 5) {
		updateCountAndScroll(1);
	}
};

document.onkeyup = (e) => {
	if (e.key === 'ArrowUp') {
		updateCountAndScroll(1);
	} else if (e.key === 'ArrowDown') {
		updateCountAndScroll(-1);
	}
};
