import { image } from 'faker';
import { createElement as el } from 'react';
import {
  Avatar, AppBar
} from 'material-ui';

const src = image.avatar();

const Header = props =>
el(AppBar, {
  title: 'Druthers',
  iconElementRight: el(Avatar, { src })
});
  
export default Header;