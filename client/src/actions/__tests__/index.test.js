import { saveComment } from "..";
import { SAVE_COMMENT } from "../types";

describe("saveComment", () => {
  it("has a correct type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("has the correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});
