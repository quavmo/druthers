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
  find(component, needle) {
    var findings;

    if(needle instanceof Function) {
      findings = TestUtils.scryRenderedComponentsWithType(component, needle);
    } else {
      let haystack = ReactDOM.findDOMNode(component);
      findings = haystack.querySelectorAll(needle);
    }

    if(findings.length === 0) throw(
      `Gadzooks! No ${needle} found in ${component.constructor.name}!`
    );

    return (findings.length === 1 ? findings[0] : findings)
  }
};
