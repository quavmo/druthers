import {
  MuiThemeProvider, AppBar, Paper
} from 'material-ui';
import { connect } from 'react-redux';
import React, { PropTypes, DOM, createElement as el } from 'react';
const { main, div } = DOM;
import { layout as className } from './Layout.css';
import Footer from './Footer';

const Layout = props => 
el(MuiThemeProvider, {},
  el(Paper, {},
    el(AppBar, {title: 'Druthers'}),
    main({...props, className}),
    el(Footer)
  )
)

export default Layout;