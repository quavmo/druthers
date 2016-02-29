import { Router } from 'react-routing';
import Marketing from './screens/marketing/Screen';
import Ballot from './screens/ballot/Screen';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('/ballots/:id', s => Ballot);
  on('/', s => Marketing);
});
