import React from 'react';
let blue = 'rgba(0,84,255,1)';

export default class CallToAction extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      message: props.alpha ? 'Create a ballot!' : "Get notified when it's released."
    };
    this.defaultDocket = {
      title: 'What are you trying to settle?'
    };
    this.style = {
      color: 'white',
      textDecoration: 'none',
      marginTop: 30,
      padding: 20,
      display: 'inline-block',
      background: blue,
      textTransform: 'capitalize'
    };
  }

	render() {
    return React.DOM.a(
      {
        href: '#signUp',
        style: this.style,
        onClick: this.handleClick.bind(this)
      },
      this.state.message
    );
	}

  handleClick(e) {
    if(!this.props.alpha) return;
    e.preventDefault();
    this.createAndShowNewDocket()
  }

  createAndShowNewDocket () {
    let docket = this.props.docketsBase.push(this.defaultDocket);
    let docketId = docket.toString().match(/([^\/]*)\/*$/)[1]
    window.location.href = `/#/dockets/${docketId}`
  }
}
