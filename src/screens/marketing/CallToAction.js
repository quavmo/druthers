import React from 'react';
import Style from '../../Style';

export default class CallToAction extends React.Component {
  constructor(props) {
    super(...arguments);
    this.state = {
      message: props.alpha ? 'Create a ballot!' : "Get notified when it's released."
    };
    this.defaultDocket = { title: 'What are you trying to settle?' };
  }

	render() {
    return React.DOM.a(
      {
        href: '#signUp',
        style: Style.button,
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
