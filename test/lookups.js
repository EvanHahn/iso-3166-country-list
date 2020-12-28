const assert = require("assert");
const countryList = require("..");

describe("lookups", function () {
  it("should be able to look up properly-capitalized Germany", function () {
    assert.strictEqual(countryList.name("DE"), "Germany");
    assert.strictEqual(countryList.code("Germany"), "DE");
  });

  it("should be able to look up improperly-capitalized Germany", function () {
    assert.strictEqual(countryList.name("dE"), "Germany");
    assert.strictEqual(countryList.code("germany"), "DE");
  });

  it("should return undefined with unknown values", function () {
    assert.strictEqual(countryList.name("something-unknown"), undefined);
    assert.strictEqual(countryList.code("something-unknown"), undefined);
  });
});
