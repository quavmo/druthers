import { Router } from 'react-routing';
import Marketing from './screens/marketing/Screen';
import Docket from './screens/docket/Screen';
import Ballot from './screens/ballot/Screen';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('/dockets/:id', s => Docket);
  on('/ballots/:id', s => Ballot);
  on('/vote/:docketId', function (route) {
    alert(route.params.docketId)
    return "Nice"
  });
  on('/', s => Marketing);
});
