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

class Footer extends Component {
  state = { selectedIndex: 0, };

  select = (index) => this.setState({selectedIndex: index});

  render() {
    return (
      el(BottomNavigation, {selectedIndex:this.state.selectedIndex},
        el(BottomNavigationItem, {
          label: "Edit Docket",
          icon: recentsIcon,
          onTouchTap: () => this.select(0)
        }),
        el(BottomNavigationItem, {
          label: "Your Ballot",
          icon: favoritesIcon,
          onTouchTap: () => this.select(1)
        }),
        el(BottomNavigationItem, {
          label: "View Results",
          icon: nearbyIcon,
          onTouchTap: () => this.select(2)
        }),
      )
    );
  }
}

export default Footer;