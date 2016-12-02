import { indexedMap } from '../../core/services/helpers';
import React, { Component, createElement as el } from 'react';
import { 
  Paper,
  FontIcon,
  BottomNavigation,
  BottomNavigationItem 
} from 'material-ui';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
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
  
  hydrateNavItem = ({label, icon}, key) => el(BottomNavigationItem, {
    key, label, icon,
    onTouchTap: () => this.select(key)
  });

  render() {
    return (
      el(BottomNavigation, {selectedIndex: this.state.selectedIndex},
        indexedMap(this.hydrateNavItem, navigationItems)
      )
    );
  }
}

export default Footer;