countryList = require ".."

describe "lists", ->

  countryCount = 249

  describe "master list", ->

    list = countryList

    it "contains #{countryCount} countries", ->
      list.should.have.a.lengthOf countryCount

    it "contains a bunch of countries", ->
      list.should.containEql { code: "ZW", name: "Zimbabwe" }
      list.should.containEql { code: "AF", name: "Afghanistan" }
      list.should.containEql { code: "DE", name: "Germany" }
      list.should.containEql { code: "ME", name: "Montenegro" }

  describe "codes list", ->

    codes = countryList.codes

    it "contains #{countryCount} codes", ->
      codes.should.have.a.lengthOf countryCount

    it "contains various countries", ->
      codes.should.containEql "ES"
      codes.should.containEql "US"
      codes.should.containEql "BS"

  describe "names list", ->

    names = countryList.names

    it "contains #{countryCount} names", ->
      names.should.have.a.lengthOf countryCount

    it "contains various countries", ->
      names.should.containEql "Bahamas"
      names.should.containEql "Germany"
      names.should.containEql "Spain"
