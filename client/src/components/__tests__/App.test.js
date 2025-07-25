import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import { shallow } from "enzyme";
import React from "react";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // const div = document.createElement('div');

  // ReactDOM.render(<App/>, div);

  // expect(div).toHaveInstanceOf(CommentBox)
  // ReactDOM.unmountComponentAtNode(div)
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
