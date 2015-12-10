import React from 'react';
import Firebase from 'firebase';
let heroBase = new Firebase("https://druthers-base.firebaseio.com/marketing/hero");
let blue = 'rgba(0,84,255,1)';

export default React.createClass({
	getInitialState: function(){
		return {
			header: 'Quit bickering.',
			subheader: "Settle decisions with an eye on everyone's priorities.",
			action: "Get notified when it's released."
		}
	},
	componentDidMount: function () {
		heroBase.on('value', function (data) { this.setState(data.val()) }, this);
	},
	render: function() {
    let header    = React.DOM.h1({style: {fontSize: 36}}, this.state.header);
    let subheader = React.DOM.h1({style: {marginTop: 10, fontSize: 14}}, this.state.subheader);
    let action    = React.DOM.a({href: '#signUp', style: {color: 'white', textDecoration: 'none', marginTop: 30, padding: 20, display: 'inline-block', background: blue, textTransform: 'capitalize'}}, this.state.action);
		let appShot   = React.DOM.img({src: 'image/nexus4_portrait.png', style: {margin: '100px auto', maxWidth: 600, display: 'block'}});
		let responsiveStyleBox = React.DOM.style(
			{},
			`
				@media (max-width: 1000px) { #hero { padding: 50px; } }
				@media (min-width: 1000px) { #hero { padding: 130px; } }
			`
		)

    return React.DOM.div({id: 'hero', style: this.outerStyle}, responsiveStyleBox, header, subheader, action, appShot);
	},
	get photoId () { return 'photo-1447752875215-b2761acb3c5d'; },
	get bgndUri () { return `https://images.unsplash.com/${this.photoId}?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f2460c17083e439b73d250a7db2a889c`; },
	get outerStyle () {
		return {
			background: 'url('+this.bgndUri+')',
			backgroundSize: 'cover',
			color: 'white',
			height: 550,
			overflow: 'hidden'
		};
	}
});
