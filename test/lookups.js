const assert = require("chai").assert;
const countryList = require("..");

describe("lookups", function () {
  it("should be able to look up properly-capitalized Germany", function () {
    assert.equal(countryList.name("DE"), "Germany");
    assert.equal(countryList.code("Germany"), "DE");
  });

  it("should be able to look up improperly-capitalized Germany", function () {
    assert.equal(countryList.name("dE"), "Germany");
    assert.equal(countryList.code("germany"), "DE");
  });

  it("should return undefined with unknown values", function () {
    assert.isUndefined(countryList.name("something-unknown"));
    assert.isUndefined(countryList.code("something-unknown"));
  });
});
