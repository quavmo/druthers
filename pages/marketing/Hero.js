import React, { DOM, createElement } from 'react';
const {
  h1,
  img,
  style,
  div
} = DOM;
import { druthersBase } from '../../core/services/DataService';
import CallToAction from './CallToAction';

let heroBase = druthersBase.child('marketing').child('hero');
let docketsBase = druthersBase.child('dockets');
let alpha = true;

export default class Hero extends React.Component {
	constructor() {
		super(...arguments);
		this.state = {
			header: 'Quit bickering.',
			subheader: "Settle decisions with an eye for everyone's priorities."
		};
	}

	componentDidMount() {
		heroBase.on('value', function (data) { this.setState(data.val()) }, this);
	}

	render() {
    let header    = h1({style: {fontSize: 36}}, this.state.header);
    let subheader = h1({style: {marginTop: 10, fontSize: 14}}, this.state.subheader);
    let action    = createElement(CallToAction, {docketsBase, alpha});
		let appShotStyles = {margin: '50px auto', maxWidth: 360, display: 'block'}
		let appShot   = img({src: this.randomMockupPath, style: appShotStyles});
		let responsiveStyleBox = style(
			{},
			`
				@media (max-width: 1000px) { #hero { padding: 50px; } }
				@media (min-width: 1000px) { #hero { padding: 130px; } }
			`
		)

    return div({id: 'hero', style: this.outerStyle}, responsiveStyleBox, header, subheader, action, appShot);
	}
	get randomShotNumber () { return Math.round(Math.random()*5) + 1; }
	get randomMockupPath () { 
    return `wrapped-mockups/screen${this.randomShotNumber}_nexus4_portrait.png` 
  }
	get photoId () { return 'photo-1447752875215-b2761acb3c5d'; }
	get bgndUri () { return `https://images.unsplash.com/${this.photoId}?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f2460c17083e439b73d250a7db2a889c`; }
	get outerStyle () {
		return {
			background: 'url('+this.bgndUri+')',
			backgroundSize: 'cover',
			color: 'white',
			textShadow: "0 0 1px black",
			height: 550,
			overflow: 'hidden'
		};
	}
}