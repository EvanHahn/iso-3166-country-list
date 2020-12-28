# ISO 3166 country list

Maps [ISO 3166 codes](http://www.iso.org/iso/country_codes.htm) to English country names and vice versa. I built this because I couldn't find something that did exactly what I wanted _and_ worked in the browser.

In the browser:

```html
<script src="country-list.js"></script>
<script>
  countryList.name("DE"); // 'Germany'
</script>
```

In Node/Browserify/Webpack, run `npm install iso-3166-country-list`:

```js
var countryList = require("iso-3166-country-list");
countryList.code("Germany"); // 'DE'
```

Here are some usage examples:

```js
countryList.name("DE"); // 'Germany'
countryList.code("Germany"); // 'DE'

countryList.name("de"); // 'Germany'
countryList.code("germany"); // 'DE'

countryList.codes; // ['AF', 'AX', 'AL', ...]
countryList.names; // ['Afghanistan', 'Åland Islands', 'Albania', ...]
countryList; // [
//   { 'code': 'AF', 'name': 'Afghanistan' },
//   { 'code': 'AX', 'name': 'Åland Islands' },
//   { 'code': 'AL', 'name': 'Albania' },
//   ...
// ]

countryList.name("something-unknown"); // undefined
countryList.code("something-unknown"); // undefined
```
