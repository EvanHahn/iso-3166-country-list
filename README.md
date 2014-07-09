ISO 3166 country list
=====================

Maps ISO 3166 codes to English country names and vice versa. Works in the browser and in Node.

I built this because I couldn't find something that did exactly what I wanted _and_ worked in the browser.

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
