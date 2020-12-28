const assert = require('chai').assert
const pkg = require('../package.json')

describe('package.json', function () {
  it('has no dependencies', function () {
    assert.isUndefined(pkg.dependencies)
  })
})
