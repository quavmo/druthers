import { Component, PropTypes } from 'react';
const { object, string } = PropTypes;
import FormStyle from './FormStyle';

export default class Gratitude extends Component {
  static propTypes = {
    feelingsBase: object.isRequired,
    name: string.isRequired
  }
  constructor(props) {
    super(props);
    this.state = { feeling: 'I hope...' };
    this.buttonStyle = {
      cursor: 'pointer',
      border: '3px solid white',
      padding: 20,
      color: 'white',
      textTransform: 'capitalize',
      margin: '20px auto',
      display: 'block',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    this.props.feelingsBase.push(this.state.latestFeeling);
    this.setState({ latestFeeling: 'I also hope...' });
  }

  handleFeelingChange = event =>
  this.setState({ latestFeeling: event.target.value });

  render() {
    const message = `Cool, ${this.props.name}!  And how do you feel about all this?`;
    const feelingsWiring = { 
      placeholder: 'I hope...',
      onChange: this.handleFeelingChange,
      ref: 'input',
      value: this.state.latestFeeling
    };
    const feelingsBox = React.DOM.input(Object.assign({ style: FormStyle.input }, feelingsWiring));
    const submit = React.DOM.button({ style: this.buttonStyle, ref: 'submit' }, 'Tell us!');
    const form = React.DOM.form({ onSubmit: this.handleSubmit }, feelingsBox, submit);
    return React.DOM.div({ style: { marginTop: 20 } }, React.DOM.p({}, message), form);
  }
}
