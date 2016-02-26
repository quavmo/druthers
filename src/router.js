import { Router } from 'react-routing';
import Marketing from './pages/marketing/Page';
import Ballot from './pages/ballot/Page';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('/ballots/:id', s => Ballot);
  on('/', s => Marketing);
});
