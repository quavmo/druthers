import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router.js';

function render() {
  let path = window.location.hash.substring(1);
  Router.dispatch(path, function(state, component) {
    let screen  = React.createElement(component, {id: state.params.id});
    let root    = document.getElementById('app');
    ReactDOM.render(screen, root);
  });
}

window.addEventListener('hashchange', () => render());
render()
