import { TextField } from 'material-ui';
import React, {
  Component, 
  DOM, 
  createElement as el
} from 'react';
const { form, input } = DOM;

export default class NewMemberForm extends Component {
  constructor() {
    super(...arguments);
    this.state = {name: ''};
  }
  
  render = () => form(
		{onSubmit: this.pushCandidate},
		this.newMemberField(this.state.name)
	);
  
  newMemberField = name => el(TextField, {
		onChange: this.stageCandidate,
		value: name,
    name: 'newMemberField',
    floatingLabelText: "Add a Candidate",
    hintText: "e.g. Chocolate, Vanilla, Strawberry...",
    fullWidth: true
	});


	stageCandidate = ({target}) => this.setState({name: target.value});

	pushCandidate = event => {
		event.preventDefault();
		event.stopPropagation();

		this.props.addMember(this.state);
		this.setState({name: ''});
	}
}