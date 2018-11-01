ember-cli-external-script-linker [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-cli-external-script-linker.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-cli-external-script-linker)
==============================================================================

This addon allows for programmatic insertion of your external style sheets so that you don't have to see annoying 404s in your test environment, or what have you.

Installation
------------------------------------------------------------------------------

```
ember install ember-cli-external-script-linker
```

Usage
------------------------------------------------------------------------------

In your `config/environment.js` file:

```javascript
module.exports = function(environment) {
  let ENV = {
    externalScriptTags: [
      {
        src: '/foo.js',
        async: true,
      },
      {
        src: '/bar.js',
        'data-foo': 'cheese',
      },
    ],
  };
});
```

And we insert these into the `{{head-footer}}` of your `app/index.html` file as such:

```html
  <script src="/foo.js" async="true"></script>
  <script src="/bar.js" data-foo="cheese"></script>
</head>
```

Contributing
------------------------------------------------------------------------------

### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
