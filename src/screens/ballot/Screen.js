import React 				from 'react';
import Firebase from 'firebase';
import Title        from './Title';
import CandidateSet    from './CandidateSet';

let Submit = React.DOM.div({}, ">");

export default React.createClass({
	getInitialState: function(){
		return {
			title: 'loading...',
			candidates: []
		}
	},
	componentDidMount: function () {
		let ballotBase = new Firebase(`https://druthers-base.firebaseio.com/ballots/${this.props.id}`);
		ballotBase.on('value', function (data) { this.setState(data.val()) }, this);
	},
	render: function() {
    let title = React.createElement(Title, {ref: 'title', ballotId: this.props.id})
    let candidateSet = React.createElement(CandidateSet, {candidates: this.state.candidates})

    return React.DOM.div({style: this.style}, title, candidateSet, Submit);
  },
 	style: {
		// background: 'rgb(60, 150, 130)',
		background: 'rgb(60, 150, 130)',
		height: '100%',
		fontFamily: 'sans-serif',
		padding: 20
	}

});
