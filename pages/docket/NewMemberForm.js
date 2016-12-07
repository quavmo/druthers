import { TextField } from 'material-ui';
import {
  PropTypes,
  Component,
  DOM,
  createElement as el,
} from 'react';
const { form } = DOM;
const { func } = PropTypes;

export default class NewMemberForm extends Component {
  static propTypes = {
    addCandidate: func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  newMemberField = name => el(TextField, {
    onChange: this.stageCandidate,
    value: name,
    name: 'newCandidate',
    floatingLabelText: 'Add a Candidate',
    hintText: 'e.g. Chocolate, Vanilla, Strawberry...',
    fullWidth: true,
  });


  stageCandidate = ({ target }) => this.setState({ name: target.value });

  pushCandidate = event => {
    event.preventDefault();
    event.stopPropagation();

    this.props.addCandidate(this.state);
    this.setState({ name: '' });
  }

  render = () => form(
    { onSubmit: this.pushCandidate },
    this.newMemberField(this.state.name)
  );
}
