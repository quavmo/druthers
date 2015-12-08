import React from 'react';

export default React.createClass({
	render: function() {
    let header    = React.createElement('h1', {key: 'header', style: {marginTop: 100, fontSize: 36}}, 'Quit bickering.');
    let subheader = React.createElement('h1', {key: 'subheader', style: {marginTop: 10, fontSize: 14}}, "Settle decisions with an eye for everyone's priorities.");
    let action    = React.createElement('div', {key: 'action', style: {marginTop: 30, padding: 20, display: 'inline-block', background: 'blue', textTransform: 'capitalize'}}, "Get notified when it's released.");
		let shotUrl 	= 'https://s3.amazonaws.com/media.launchrockstaging.com/assets/sites/site-7v23ksjv6uwjl511cwkt3g93u/jlxz7r-phone.png';
		let appShot   = React.createElement('img', {key: 'shot', src: shotUrl, style: {margin: '100px auto', maxWidth: 371, display: 'block'}});

		let photoId = '45/PlEgx5PSoiiJOmnE2izQ_NYC%20skyline%20empire-1.jpg'
		// let photoId = 'reserve/oY3ayprWQlewtG7N4OXl_DSC_5225-2.jpg'
    let bgndUri     = 'https://images.unsplash.com/'+photoId+'?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f2460c17083e439b73d250a7db2a889c';

    let outerStyle  = {
      background: 'url('+bgndUri+')',
      backgroundSize: 'cover',
      color: 'white',
      padding: 20,
			height: 550,
			overflow: 'hidden'
    };

    return React.createElement('div', {style: outerStyle}, [header, subheader, action, appShot]);
	}
});
