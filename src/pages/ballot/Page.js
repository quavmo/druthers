import React 				from 'react';
import Firebase from 'firebase';
import Title        from './Title';
import CandidateSet    from './CandidateSet';
// import SubmitButton from './SubmitButton';

let ballotBase = new Firebase("https://druthers-base.firebaseio.com/ballots/1");
let Submit = React.DOM.div({}, ">");

export default React.createClass({
	getInitialState: function(){
		return {
			title: 'loading...',
			candidates: []
		}
	},
	componentDidMount: function () {
		ballotBase.on('value', function (data) { this.setState(data.val()) }, this);
	},
	render: function() {
    let title = React.createElement(Title, {text: this.state.title})
    let candidateSet = React.createElement(CandidateSet, {candidates: this.state.candidates})

    let style = {
      background: 'rgb(60, 150, 130)',
      height: '100%',
      fontFamily: 'sans-serif',
      padding: 20
    };

    return React.DOM.div({style: style}, title, candidateSet, Submit);
  }
});
