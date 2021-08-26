import React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Tour from "./Tour";

Enzyme.configure({ adapter: new Adapter() });

const TourProps = {
  id: "6rPO02ozF3bM7NnOV4h6s2",
  image: "http://fake.com",
  info: "test info",
  price: "120",
  name: "tour name",
  removeTour: jest.fn(() => {}),
};

/**
 * Factory Function - Create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - component props to this setup
 * @param {object} state - Initail state for setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<Tour {...TourProps} />);
  if (state) wrapper.setState(state);
  return wrapper;
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

test("Clicking show more button, shows more description about the tour", () => {
  const readMore = true;
  const wrapper = setup(null, { readMore });
  const buttonLink = findByTestAttr(wrapper, "showmore-button");
  buttonLink.simulate("click");
  wrapper.update();

  const readmoreDisplay = findByTestAttr(wrapper, "readmore-display");
  expect(readmoreDisplay.text()).toContain(TourProps.info);
});

test("Removing a tour from tours list", () => {
  const wrapper = setup();
  const buttonRemove = findByTestAttr(wrapper, "remove-tour");
  buttonRemove.simulate("click");
  expect(TourProps.removeTour).toHaveBeenCalled();
});
