import Page from '../src/pages/marketing/Page.js';
import Hero from '../src/pages/marketing/Hero.js';
import UseCaseList from '../src/pages/marketing/UseCaseList.js';
import SignUp from '../src/pages/marketing/SignUp.js';
import React from 'react/addons';

import matchers from 'react-jasmine-matchers';
beforeEach(function () { jasmine.addMatchers(matchers(TestUtils)); });

const TestUtils = React.addons.TestUtils;
const shallowRenderer = TestUtils.createRenderer();

describe("the Marketing Page", function() {
  beforeEach(function () {
    shallowRenderer.render(React.createElement(Page));
    this.subject = shallowRenderer.getRenderOutput();
  });

  it("has three sections", function() {
    expect(this.subject.props.children[0]).toBeElOf(Hero);
    expect(this.subject.props.children[1]).toBeElOf(UseCaseList);
    expect(this.subject.props.children[2]).toBeElOf(SignUp);
  });
});
