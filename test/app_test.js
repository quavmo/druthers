import App from '../src/App.js';
import ReactTestUtils from 'react-addons-test-utils';

describe("the App", function() {
  beforeEach(function () {
    this.DOM = ReactTestUtils.createRenderer()
  })
  it("three sections", function() {
    expect(React.createElement(App)).toBe(true);
  });
});
