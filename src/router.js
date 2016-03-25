import { Router } from 'react-routing';
import Marketing from './screens/marketing/Screen';
import Docket from './screens/docket/Screen';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('/dockets/:id', s => Docket);
  on('/', s => Marketing);
});
