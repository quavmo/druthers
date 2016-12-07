import { p } from '../../core/services/helpers';
import { map, propEq, findIndex, reject, isNil } from 'ramda';
import React, { Component, createElement as el } from 'react';
import { 
  Paper,
  FontIcon,
  BottomNavigation,
  BottomNavigationItem 
} from 'material-ui';

import DocketIcon from 'material-ui/svg-icons/image/palette';
import BallotIcon from 'material-ui/svg-icons/editor/format-line-spacing';
import ResultsIcon from 'material-ui/svg-icons/action/gavel';


const navigationItems = [
  {label: "Docket", icon: el(DocketIcon)},
  {label: "Ballot", icon: el(BallotIcon)},
  {label: "Results", icon: el(ResultsIcon)}
];


const hydrateNavItem = (navigateToPage, docketID) => ({label, icon}) =>
el(BottomNavigationItem, { 
  onTouchTap: () => navigateToPage({pageLabel: label, docketID}),
  key: label, label, icon 
});
  
const Footer = ({selectedPage, navigateToPage, docketID}) =>
el(BottomNavigation, {
  selectedIndex: findIndex(propEq('label', selectedPage))(navigationItems)
},
  ...reject(isNil, [
    hydrateNavItem(navigateToPage, docketID)(navigationItems[0]),
    docketID && hydrateNavItem(navigateToPage, docketID)(navigationItems[1]),
    docketID && hydrateNavItem(navigateToPage, docketID)(navigationItems[2]),
  ])
);

export default Footer;