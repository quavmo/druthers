import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import React from 'react';

export default {
  click(instance) {
    return TestUtils.Simulate.click(ReactDOM.findDOMNode(instance));
  },
  fill(node, text) {
    node.value = text
    TestUtils.Simulate.change(node);
  },
  submit: TestUtils.Simulate.submit,
  plant(component, props) {
    return TestUtils.renderIntoDocument(React.createElement(component, props));
  },
  stub(component, methodName) {
    return spyOn(component.prototype.__reactAutoBindMap, methodName);
  },
  find(component, type) {
    if(type instanceof Function) return TestUtils.scryRenderedComponentsWithType(component, type);

    let node = ReactDOM.findDOMNode(component);
    return node.querySelectorAll(type);
  }
};
