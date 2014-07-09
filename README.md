ISO 3166 country list
=====================

Maps ISO 3166 codes to English country names and vice versa. Works in the browser and in Node. Uses data from <http://data.okfn.org/data/country-list>.

*Not yet available on npm.*

examples
--------

```js
countryList.name("DE")       // "Germany"
countryList.code("Germany")  // "DE"

countryList.name("de")       // "Germany"
countryList.code("germany")  // "DE"

countryList.codes  // ["AF", "AX", "AL", ...]
countryList.names  // ["Afghanistan", "Åland Islands", "Albania", ...]
countryList        // [
                   //   { "code": "AF", "name": "Afghanistan" },
                   //   { "code": "AX", "name": "Åland Islands" },
                   //   { "code": "AL", "name": "Albania" },
                   //   ...
                   // ]

countryList.name("something-unknown")  // undefined
countryList.code("something-unknown")  // undefined
```
