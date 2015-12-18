import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.js';

let path = window.location.hash.substring(1);

Router.dispatch(path, function(state, page) {
  ReactDOM.render(React.createElement(page), document.getElementById('app'));
});
