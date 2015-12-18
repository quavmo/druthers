import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.js';

function render() {
  let path = window.location.hash.substring(1);
  console.log(`dispatching to ${path}`);
  Router.dispatch(path, function(state, page) {
    ReactDOM.render(React.createElement(page), document.getElementById('app'));
  });
}

window.addEventListener('hashchange', () => render());
render()
