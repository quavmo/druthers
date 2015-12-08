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

		let header = React.createElement('h2', {key: 'header', margin: '70 0'}, 'Get your druthers.');
		return React.createElement('div', {style:{padding: 20}}, [header, ...cases.map(this.hydrateCase)]);
	},
	hydrateCase: function (data) {
		let image = React.createElement('img', {key: 'image',src: `image/${data.key}.svg`, style: {width: 120}});
		let title = React.createElement('h1', {key: 'title', style: {color: 'red'}}, data.title);
		let body 	= React.createElement('p', {key: 'body'}, data.body);
		return React.createElement('div', data, [image, title, body])
	}
});
