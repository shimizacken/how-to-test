const { sum } = require("./sum");

describe("sum test suite", () => {
  it("should add successfully", () => {
    expect(sum(1, 1)).toEqual(2);
  });
});
