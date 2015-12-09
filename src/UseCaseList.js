import React from 'react';


export default React.createClass({
	render: function() {
		let cases = [{
			key: 'food',
			title: 'Chow mein? Ramen? Phở?',
			body: 'Whip up a ballot that ends the conversations about what kind of noodles to have for dinner. Send it to your compadres and let them rank their options.'
		},{
			key: 'music',
			title: 'Nickelback? Nickel Creek? Nick Cave?',
			body: 'Share your ballot with any number of individuals, public or private. Post your ballot online, and let your audience choose your next direction.'
		},{
			key: 'politics',
			title: 'Democrat? Republican? Independent?',
			body: 'Give the people what they want, or give them their second choice. With ranked-choice ballots, i.e. "instant runoffs", voters can prioritize their dream candidate, while still indicating a more realistic fallback.'
		}];

		let header 	= React.DOM.h2({style: {padding: 30, fontSize: 30}}, 'Get your druthers.');
		let responsiveStyleBox = React.DOM.style(
			{},
			`
				@media (max-width: 1000px) {
					#caseBox { display: block; }
					#useCaseList { padding: 20px; }
				}
				@media (min-width: 1000px) {
					#caseBox { display: flex; }
					#useCaseList { padding: 100px; }
				}
			`
		)
		let caseBox = React.DOM.div({id: 'caseBox'}, ...cases.map(this.hydrateCase))
		return React.DOM.div({id: 'useCaseList'}, responsiveStyleBox, header, caseBox);
	},
	hydrateCase: function (data) {
		let image = React.DOM.img({src: `image/${data.key}.svg`, style: {height: 120}});
		let title = React.DOM.h1({style: {color: 'red', marginTop: 30}}, data.title);
		let body 	= React.DOM.p({style: {marginTop: 20}}, data.body);

		return React.DOM.div(Object.assign(data, {style: {padding: 30}}), image, title, body);
	}
});
