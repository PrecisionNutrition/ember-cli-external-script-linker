# ember-cli-external-script-linker [![Build Status](https://travis-ci.org/PrecisionNutrition/ember-cli-external-script-linker.svg?branch=master)](https://travis-ci.org/PrecisionNutrition/ember-cli-external-script-linker)

This addon allows for programmatic insertion of your external style sheets so that you don't have to see annoying 404s in your test environment, or what have you.

## Installation

* `ember install ember-cli-external-script-linker`

In your `config/environment.js` file:

```javascript
module.exports = function(environment) {
  var ENV = {
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
