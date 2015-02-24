assert = require "assert"
countryList = require ".."

describe "lookups", ->

  it "should be able to look up properly-capitalized Germany", ->
    countryList.name("DE").should.eql "Germany"
    countryList.code("Germany").should.eql "DE"

  it "should be able to look up improperly-capitalized Germany", ->
    countryList.name("dE").should.eql "Germany"
    countryList.code("germany").should.eql "DE"

  it "should return undefined with unknown values", ->
    assert.equal(countryList.name("something-unknown"), undefined)
    assert.equal(countryList.code("something-unknown"), undefined)
