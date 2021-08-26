import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

/**
 * Factory Function - Create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props to this setup
 * @param {any} state - Initail state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} val - Value fo data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("renders without crashing", () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app");
  expect(appComponent.length).toBe(1);
});

test("renders title displaying", () => {
  const wrapper = setup();
  const titleDisplay = findByTestAttr(wrapper, "title-display");
  expect(titleDisplay.length).toBe(1);
});

test("loading initial state is true", () => {
  const wrapper = setup();
  const initialLoadingState = wrapper.state("loading");
  expect(initialLoadingState).toBe(true);
});
