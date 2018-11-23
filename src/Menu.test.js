import React from "react";
import ReactDOM from "react-dom";
import Menu from "./Menu";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

it("Menu button is working", () => {
  const menuComponent = shallow(<Menu />);
  expect(menuComponent.state("isToggleOn")).toBe(false);
  menuComponent.find("button").simulate("click");
  expect(menuComponent.state("isToggleOn")).toBe(true);
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
