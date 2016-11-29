import {
  MuiThemeProvider, AppBar, BottomNavigation, BottomNavigationItem, Paper
} from 'material-ui';
import React, { PropTypes, DOM, createElement as el } from 'react';
const { main, div } = DOM;
import cx from 'classnames';
import './Layout.css';
import Footer from './Footer';

class Layout extends React.Component {
  render() {
    return (
      el(MuiThemeProvider, {ref: node => (this.root = node)},
        el(Paper, {zDepth: 1},
          el(AppBar, {title: 'Druthers'}),
          main({...this.props, className: cx(this.props.className)}),
          el(Footer)
        )
      )
    );
  }
}

export default Layout;
