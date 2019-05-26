import { shallow } from "enzyme";
import React from "react";
import ErrorBoundry from "./ErrorBoundry";

it("renders ErrorBoundry correctly", () => {
  expect(shallow(<ErrorBoundry />)).toMatchSnapshot();
});

it("setting state hasError to true if error occurs", () => {
  const wrapper = shallow(<ErrorBoundry />);
  const componentInstance = wrapper.instance();
  componentInstance.componentDidCatch();

  expect(wrapper.state("hasError")).toBe(true);
});
