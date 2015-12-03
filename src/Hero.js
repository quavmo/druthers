import React from 'react';

export default React.createClass({
	render: function() {
    let header    = React.createElement('h1', {key: 'header', style: {fontSize: '77px'}}, 'Quit bickering.');
    let subheader = React.createElement('h1', {key: 'subheader', style: {marginTop: 10, fontSize: '14px'}}, "Settle decisions with an eye for everyone's priorities.");
    let action    = React.createElement('div', {key: 'action', style: {marginTop: 30, padding: 20, display: 'inline-block', background: 'blue', textTransform: 'capitalize'}}, "Get notified when it's released.");

    let bgndUri     = 'https://images.unsplash.com/photo-1413745000559-46fdd2d81cd7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=f2460c17083e439b73d250a7db2a889c';

    let outerStyle  = {
      background: 'url('+bgndUri+')',
      backgroundSize: 'cover',
      color: 'white',
      fontFamily: 'sans-serif',
      padding: 10
    };

    return React.createElement('div', {style: outerStyle}, [header, subheader, action]);
	}
});
