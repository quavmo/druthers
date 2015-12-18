import {
  Router
}
from 'react-routing';
import MarketingPage from './pages/marketing/Page';
import React from 'react';
import 'babel-polyfill';

export default new Router(on => {
  on('*', s => MarketingPage);
  on('/hello', s => MarketingPage);
});
