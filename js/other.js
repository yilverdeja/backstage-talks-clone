const createIssue = (issue) => {
	const linkColor = issue.linkColor === 'pink' ? 'pink' : 'white';
	const pictureElement = `
    <picture class="issue__picture">
        <source srcset="images/issue_${issue.id}.webp" type="image/webp">
        <source srcset="images/issue_${issue.id}.png" type="image/png">
        <img
            class="issue__image"
            src="images/issue_${issue.id}.png"
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
	},
	{
		id: 6,
		buy: [{ url: '#', location: '' }],
		other: '#',
		linkColor: 'pink',
	},
	{
		id: 5,
		buy: [{ url: '#', location: '' }],
		other: '#',
	},
	{
		id: 4,
		other: '#',
	},
	{
		id: 3,
		buy: [{ url: '#', location: '' }],
		other: '#',
	},
	{
		id: 2,
		buy: [{ url: '#', location: '' }],
		other: '#',
	},
	{
		id: 1,
		other: '#',
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
