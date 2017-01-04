import { image } from 'faker';
import {
  MuiThemeProvider, AppBar, Paper, Avatar
} from 'material-ui';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import { DOM, createElement as el } from 'react';
const { main } = DOM;
import { layout as className } from './Layout.css';
import Footer from './Footer';

const sunset = 16.75;
const currentTime = (new Date()).getHours();
const muiTheme = currentTime > sunset ? getMuiTheme(darkBaseTheme) : null;

const Layout = ({ children, pageLabel, navigateToPage, docketID }) =>
el(MuiThemeProvider, { muiTheme, className },
  el('div', {},
    el(AppBar, { title: 'Druthers', iconElementRight: el(Avatar, {src: image.avatar()}) }),
    main({}, ...children),
    docketID ? el(Footer, { selectedPage: pageLabel, navigateToPage, docketID }) : null
  )
);

export default Layout;
