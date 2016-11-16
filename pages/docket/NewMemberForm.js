import React, {Component, DOM} from 'react';
const { form, input } = DOM;
import s from '../styles.css';

export default class NewMemberForm extends Component {
  constructor() {
    super(...arguments);
    this.state = {name: ''};
  }
  
  render = () => form(
		{onSubmit: this.pushCandidate},
		this.newMemberField(this.state.name)
	);
  
  newMemberField = name => input({
		className: s.newMemberField,
		onChange: this.stageCandidate,
		value: name
	});


	stageCandidate = ({target}) => this.setState({name: target.value});

	pushCandidate = event => {
		event.preventDefault();
		event.stopPropagation();

		this.props.addMember(this.state);
		this.setState({name: ''});
	}
}