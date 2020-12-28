const assert = require("assert");
const countryList = require("..");

const COUNTRY_COUNT = 249;

describe("lists", function () {
  describe("master list", function () {
    it("contains " + COUNTRY_COUNT + " countries", function () {
      assert.strictEqual(countryList.length, COUNTRY_COUNT);
    });

    it("contains a bunch of countries", function () {
      assert(
        countryList.find(function (country) {
          return country.code === "ZW" && country.name === "Zimbabwe";
        })
      );
      assert(
        countryList.find(function (country) {
          return country.code === "AF" && country.name === "Afghanistan";
        })
      );
      assert(
        countryList.find(function (country) {
          return country.code === "DE" && country.name === "Germany";
        })
      );
      assert(
        countryList.find(function (country) {
          return country.code === "ME" && country.name === "Montenegro";
        })
      );
    });

    describe("codes list", function () {
      it("contains " + COUNTRY_COUNT + " codes", function () {
        assert.strictEqual(countryList.codes.length, COUNTRY_COUNT);
      });

      it("contains various countries", function () {
        assert(countryList.codes.includes("ES"));
        assert(countryList.codes.includes("US"));
        assert(countryList.codes.includes("BS"));
      });
    });

    describe("names list", function () {
      it("contains " + COUNTRY_COUNT + " names", function () {
        assert.strictEqual(countryList.names.length, COUNTRY_COUNT);
      });

      it("contains various countries", function () {
        assert(countryList.names.includes("Bahamas"));
        assert(countryList.names.includes("Germany"));
        assert(countryList.names.includes("Spain"));
      });
    });
  });
});
