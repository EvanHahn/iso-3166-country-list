assert = require("chai").assert
countryList = require ".."

describe "lookups", ->

  it "should be able to look up properly-capitalized Germany", ->
    assert.equal(countryList.name("DE"), "Germany")
    assert.equal(countryList.code("Germany"), "DE")

  it "should be able to look up improperly-capitalized Germany", ->
    assert.equal(countryList.name("dE"), "Germany")
    assert.equal(countryList.code("germany"), "DE")

  it "should return undefined with unknown values", ->
    assert.isUndefined(countryList.name("something-unknown"))
    assert.isUndefined(countryList.code("something-unknown"))
