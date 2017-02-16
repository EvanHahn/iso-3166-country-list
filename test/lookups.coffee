assert = require("chai").assert
countryList = require ".."

describe "lists", ->

  countryCount = 249

  describe "master list", ->

    list = countryList

    it "contains #{countryCount} countries", ->
      assert.lengthOf(list, countryCount)

    it "contains a bunch of countries", ->
      assert list.find ({ code, name }) ->
        code is 'ZW' and name is 'Zimbabwe'
      assert list.find ({ code, name }) ->
        code is 'AF' and name is 'Afghanistan'
      assert list.find ({ code, name }) ->
        code is 'DE' and name is 'Germany'
      assert list.find ({ code, name }) ->
        code is 'ME' and name is 'Montenegro'

  describe "codes list", ->

    codes = countryList.codes

    it "contains #{countryCount} codes", ->
      assert.lengthOf(codes, countryCount)

    it "contains various countries", ->
      assert.include(codes, "ES")
      assert.include(codes, "US")
      assert.include(codes, "BS")

  describe "names list", ->

    names = countryList.names

    it "contains #{countryCount} names", ->
      assert.lengthOf(names, countryCount)

    it "contains various countries", ->
      assert.include(names, "Bahamas")
      assert.include(names, "Germany")
      assert.include(names, "Spain")
