import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Menu from "./Menu";

it("Menu renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Menu />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should show menu if clicked", () => {
  const wrapper = shallow(<Menu />);
  wrapper.simulate("click");
});
