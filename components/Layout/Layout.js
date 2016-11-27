import { MuiThemeProvider } from 'material-ui';
import React, { PropTypes, DOM, createElement as el } from 'react';
const { div, main } = DOM;
import cx from 'classnames';
// import s from './Layout.css';

class Layout extends React.Component {
  render() {
    return (
      el(MuiThemeProvider, {ref: node => (this.root = node)},
        main({...this.props, className: cx(this.props.className)})
      )
    );
  }
}

export default Layout;