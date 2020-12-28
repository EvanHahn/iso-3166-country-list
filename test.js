var assert = require("assert");
var countryList = require("./country-list");

var COUNTRY_COUNT = 249;
assert.strictEqual(countryList.length, COUNTRY_COUNT);
assert.strictEqual(countryList.codes.length, COUNTRY_COUNT);
assert.strictEqual(countryList.names.length, COUNTRY_COUNT);

function country(code, name) {
  return function (c) {
    return c.code === code && c.name === name;
  };
}
assert(countryList.some(country("ZW", "Zimbabwe")));
assert(countryList.some(country("AF", "Afghanistan")));
assert(countryList.some(country("DE", "Germany")));

assert(countryList.codes.includes("ES"));
assert(countryList.codes.includes("US"));
assert(countryList.codes.includes("BS"));
assert.strictEqual(countryList.code("Germany"), "DE");
assert.strictEqual(countryList.code("germanY"), "DE");
assert.strictEqual(countryList.code("unknown"), undefined);

assert(countryList.names.includes("Bahamas"));
assert(countryList.names.includes("Germany"));
assert(countryList.names.includes("Spain"));
assert.strictEqual(countryList.name("DE"), "Germany");
assert.strictEqual(countryList.name("dE"), "Germany");
assert.strictEqual(countryList.name("unknown"), undefined);
