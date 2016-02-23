import React 				from 'react';
import Title        from './Title';
import CandidateSet    from './CandidateSet';
// import SubmitButton from './SubmitButton';


let Candidate = React.DOM.div({}, "Get Off My LAN");
let Submit = React.DOM.div({}, ">");

export default React.createClass({
	render: function() {
    let title = React.createElement(Title)
    let candidateSet = React.createElement(CandidateSet)

    let style = {
      background: 'rgb(60, 150, 130)',
      height: '100%',
      fontFamily: 'sans-serif',
      padding: 20
    };

    return React.DOM.div({style: style}, title, candidateSet, Submit);
  }
});
