import { DOM, Component, createElement as el } from 'react';
import { interestedBase } from '../../core/services/DataService';
import Gratitude from './Gratitude';
import FormStyle from './FormStyle';
const {
  h1, p, input, button, style, form, div,
} = DOM;
const blue = 'rgba(0,84,255,1)';
const subheaderTagline = "You'll be able to create a docket immediately, and it will be the last day your group priorities are unclear.";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '' };
  }

  handleNameChange = event => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  }

  handleEmailChange = event => {
    event.preventDefault();
    this.setState({ email: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = interestedBase.push({ name: this.state.name, email: this.state.email });
    console.log(user.child('feelings'))
    this.setState({ submitted: true, feelingsBase: user.child('feelings') });
  }


  render() {
    const header = h1(
      { style: { textTransform: 'capitalize', fontSize: 42 } },
      "Get notified when it's released"
    );
    const gratitude = el(Gratitude,
      { name: this.state.name, feelingsBase: this.state.feelingsBase }
    );
    const subheader = p({ style: { marginTop: 20 } }, subheaderTagline);

    const name = input({
      type: 'text',
      style: FormStyle.input,
      placeholder: 'Name',
      onChange: this.handleNameChange,
      value: this.state.name,
    });

    const email = input({
      type: 'text',
      style: FormStyle.input,
      placeholder: 'Email',
      onChange: this.handleEmailChange,
      value: this.state.email,
    });

    const submit = button(
      { style: { cursor: 'pointer', border: '3px solid white', padding: 20, color: 'white', textTransform: 'capitalize', margin: '20px auto', display: 'block' } },
      'Submit'
    );

    const outerProps = {
      id: 'signUp', style: { color: 'white', background: blue, fontFamily: 'sans-serif' },
    };

    const responsiveStyleBox = style(
      {},
      `
        @media (max-width: 1000px) { #signUp { padding: 50px; } }
        @media (min-width: 1000px) { #signUp { padding: 130px; } }
        button { background: ${blue}; }
        button:hover { background: grey; }
      `
    );
    const signupForm = form(
     { onSubmit: this.handleSubmit },
     name, email, submit
   );
    return div(
      outerProps,
      responsiveStyleBox,
      header,
      subheader,
      style({}, '::-webkit-input-placeholder { color: white }'),
      this.state.submitted ? gratitude : signupForm
    );
  }
}
