var assert = require('chai').assert
var countryList = require('..')

var COUNTRY_COUNT = 249

describe('lists', function () {
  describe('master list', function () {
    it('contains ' + COUNTRY_COUNT + ' countries', function () {
      assert.lengthOf(countryList, COUNTRY_COUNT)
    })

    it('contains a bunch of countries', function () {
      assert(countryList.find(function (country) {
        return country.code === 'ZW' && country.name === 'Zimbabwe'
      }))
      assert(countryList.find(function (country) {
        return country.code === 'AF' && country.name === 'Afghanistan'
      }))
      assert(countryList.find(function (country) {
        return country.code === 'DE' && country.name === 'Germany'
      }))
      assert(countryList.find(function (country) {
        return country.code === 'ME' && country.name === 'Montenegro'
      }))
    })

    describe('codes list', function () {
      it('contains ' + COUNTRY_COUNT + ' codes', function () {
        assert.lengthOf(countryList.codes, COUNTRY_COUNT)
      })

      it('contains various countries', function () {
        assert.include(countryList.codes, 'ES')
        assert.include(countryList.codes, 'US')
        assert.include(countryList.codes, 'BS')
      })
    })

    describe('names list', function () {
      it('contains ' + COUNTRY_COUNT + ' names', function () {
        assert.lengthOf(countryList.names, COUNTRY_COUNT)
      })

      it('contains various countries', function () {
        assert.include(countryList.names, 'Bahamas')
        assert.include(countryList.names, 'Germany')
        assert.include(countryList.names, 'Spain')
      })
    })
  })
})
