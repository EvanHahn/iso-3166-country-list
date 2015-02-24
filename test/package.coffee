assert = require "assert"
pkg = require "../package.json"

describe "package.json", ->
  it "has no dependencies", ->
    assert.equal pkg.dependencies, undefined
