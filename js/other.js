const createIssue = (issue) => {
	const linkColor = issue.linkColor === 'pink' ? 'pink' : 'white';
	const pictureElement = `
    <picture class="issue__picture">
        <source srcset="${issue.img_webp}" type="image/webp">
        <source srcset="${issue.img_png}" type="image/png">
        <img
            class="issue__image"
            src="${issue.img_png}"
            alt="Issue ${issue.id} Book Cover"
        />
    </picture>`;

	const issueContentMain = `${
		issue.buy
			? `
            <div class="issue__content-main">
                ${issue.buy
					.map(
						(b) =>
							`<p><a class="link link--${linkColor}" href="${
								b.url
							}">BUY HERE</a>${
								b.location ? ` (${b.location})` : ''
							}</p>`
					)
					.join('')}
                
            </div>`
			: ''
	}`;

	const issueContentSub = `${
		issue.other
			? `
    <div class="issue__content-sub">
        <p>
            ${
				issue.buy
					? 'or in '
					: 'If you are lucky, you may get the last pieces in '
			}
            <a href="${
				issue.other
			}" target="_blank" class="link link--${linkColor}">selected stores</a>
        </p>
    </div>`
			: ''
	}`;

	return `
    <section id="issue${issue.id}" class="issue">
        ${pictureElement}
        <header class="issue__header">
            <h2 class="issue__heading">Issue #${issue.id}${
		issue.buy ? '' : ' is sold out'
	}</h2>
            <div class="issue__content">
                ${issueContentMain}
                ${issueContentSub}
            </div>
        </header>
    </section>`;
};

const createNavigation = (issues) => {
	return `<ul class="list">
        ${issues
			.map(
				(issue, index) =>
					`<li id="nav${issue.id}" class="${
						index === 0 ? 'list__item nav--active' : 'list__item'
					}" onclick="updateCountAndScrollV2(${issue.id})">Issue ${
						issue.id
					}</li>`
			)
			.join('')}
    </ul>`;
};

const issuesData = [
	{
		id: 7,
		buy: [
			{ url: '#', location: 'Europe' },
			{ url: '#', location: 'UK & Overseas' },
		],
		other: '#',
		img_webp: require('../images/issue_7.webp'),
		img_png: require('../images/issue_7.png'),
	},
	{
		id: 6,
		buy: [{ url: '#', location: '' }],
		other: '#',
		linkColor: 'pink',
		img_webp: require('../images/issue_6.webp'),
		img_png: require('../images/issue_6.png'),
	},
	{
		id: 5,
		buy: [{ url: '#', location: '' }],
		other: '#',
		img_webp: require('../images/issue_5.webp'),
		img_png: require('../images/issue_5.png'),
	},
	{
		id: 4,
		other: '#',
		img_webp: require('../images/issue_4.webp'),
		img_png: require('../images/issue_4.png'),
	},
	{
		id: 3,
		buy: [{ url: '#', location: '' }],
		other: '#',
		img_webp: require('../images/issue_3.webp'),
		img_png: require('../images/issue_3.png'),
	},
	{
		id: 2,
		buy: [{ url: '#', location: '' }],
		other: '#',
		img_webp: require('../images/issue_2.webp'),
		img_png: require('../images/issue_2.png'),
	},
	{
		id: 1,
		other: '#',
		img_webp: require('../images/issue_1.webp'),
		img_png: require('../images/issue_1.png'),
	},
];

// inject navigation elements
const navigationSelector = document.querySelector('.navigation');
const nav = createNavigation(issuesData);
navigationSelector.insertAdjacentHTML('afterbegin', nav);

// inject main content
const mainSelector = document.querySelector('main');
const html = issuesData.map((issueData) => createIssue(issueData)).join('');
mainSelector.insertAdjacentHTML('afterbegin', html);
