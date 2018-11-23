import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should say ole is awesome", () => {
  const fact = "ole is awesome";
  expect(fact).toBe("ole is awesome");
});
