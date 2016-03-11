import React 				from 'react';
import Title        from './Title';
import CandidateSet    from './CandidateSet';
import Firebase from 'firebase';


let Submit = React.DOM.div({}, ">");
var firebase = new Firebase('druthers-base.firebaseio.com');

export default React.createClass({
	getInitialState: () => {return {candidates:[]}},
	render: function() {
		let ballotRef = firebase.child(`ballots/${this.props.id}`);

		let title = React.createElement(Title,
			{text: this.state.title, titleRef: ballotRef.child('title')}
		);
    let candidateSet = React.createElement(CandidateSet,
			{members: this.state.candidates, membersRef: ballotRef.child('candidates')}
		);

    return React.DOM.div({style: this.style}, title, candidateSet, Submit);
  },
	componentDidMount: function () {
		firebase.on('value', this.setStateIfData, this);
	},
	setStateIfData(data) {
		data.val() && this.setState(data.val().ballots[this.props.id]);
	},
 	style: {
		// background: 'rgb(60, 150, 130)',
		background: 'rgb(60, 150, 130)',
		height: '100%',
		fontFamily: 'sans-serif',
		padding: 20
	}
});
