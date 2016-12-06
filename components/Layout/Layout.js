import {
  MuiThemeProvider, AppBar, Paper
} from 'material-ui';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import { connect } from 'react-redux';
import React, { PropTypes, DOM, createElement as el } from 'react';
const { main, div } = DOM;
import { layout as className } from './Layout.css';
import Footer from './Footer';

const sunset = 16.75;
const currentTime = (new Date()).getHours();
const muiTheme = currentTime > sunset ? getMuiTheme(darkBaseTheme) : null;

const Layout = props => 
el(MuiThemeProvider, { muiTheme },
  el(Paper, {},
    el(AppBar, { title: 'Druthers' }),
    main({ ...props, className }),
    el(Footer)
  )
)

export default Layout;