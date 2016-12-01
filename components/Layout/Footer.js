import { indexedMap } from '../../core/services/helpers';
import React, { Component, createElement as el } from 'react';
import { 
  Paper,
  FontIcon,
  BottomNavigation,
  BottomNavigationItem 
} from 'material-ui';

import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const recentsIcon = <IconLocationOn />;
const favoritesIcon = <IconLocationOn />;
const nearbyIcon = <IconLocationOn />;

const navigationItems = [
  {label: "Edit Docket"},
  {label: "Your Docket"},
  {label: "View Results"}
];

class Footer extends Component {
  state = { selectedIndex: 0, };
  select = (index) => this.setState({selectedIndex: index});
  
  hydrateNavItem = ({label}, key) => el(BottomNavigationItem, {
    key, label, icon: recentsIcon,
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