import { shallow } from "enzyme";
import React from "react";
import Header from "./Header";

it("expect to render Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});

it("should not rerender component", () => {
  const wrapper = shallow(<Header />);
  const componentInstance = wrapper.instance().shouldComponentUpdate();
  expect(componentInstance).toBe(false);
});
