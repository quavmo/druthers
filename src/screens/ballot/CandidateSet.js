import React 				from 'react';
import Candidate 	  from './Candidate';
import R from 'ramda';

export default React.createClass({
	getInitialState(){
		return {newCandidate: {name: ''}};
	},
	render() {
    let style = {
      color: 'white',
      fontSize: 28,
      textAlign: 'center'
    };

    let candidates = R
			.toPairs(this.props.members)
			.map(this.hydrateCandidate);

		let newMemberField = React.DOM.input({
			onChange: this.stageCandidate,
			value: this.state.newCandidate.name
		});
		let newMemberForm = React.DOM.form({onSubmit: this.pushCandidate}, newMemberField);
		return React.DOM.ol({style}, ...candidates, newMemberForm);
  },
	hydrateCandidate(pair) {
    return React.createElement(Candidate, {name: pair[1].name});
	},
	stageCandidate(event){
		event.preventDefault();
		event.stopPropagation();

		this.setState({newCandidate: {name: event.target.value}});
	},
	pushCandidate(event) {
		event.preventDefault();
		event.stopPropagation();

		this.props.membersBase.push(this.state.newCandidate);
		this.setState({newCandidate: {name: ''}});
	}
});