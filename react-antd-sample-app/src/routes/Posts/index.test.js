import React from 'react';
import { shallow } from 'enzyme';
import Posts from './index';

describe("Posts", () => {
  it("should render correctly", () => {
    const component = shallow(<Posts/>);
  });
  it("should render initial layout", () => {
    // when
    const component = shallow(<Posts />);
    // then
   // expect(component.getElements()).toMatchSnapshot();
  });
  it("should create an entry in component state", () => {
    // given
    const component = shallow(<MyComponent />);
    const form = component.find('input');
   });
});