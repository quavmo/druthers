import { map, propEq, findIndex } from 'ramda';
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

class Footer extends Component {
  state = { selectedIndex: 0, };
  select = (index) => this.setState({selectedIndex: index});
  
  hydrateNavItem = ({label, icon}) => el(BottomNavigationItem, {
    key: label, label, icon
  });

  render() {
    return (
      el(BottomNavigation, {
        selectedIndex: findIndex(propEq('label', this.props.selectedPage))(navigationItems)
      },
        map(this.hydrateNavItem, navigationItems)
      )
    );
  }
}

export default Footer;