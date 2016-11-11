/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-external-script-linker',

  contentFor: function (type, config) {
    if (type === 'head-footer') {
      var scriptOptions = config.externalScriptTags || [];

      return scriptOptions
       .map(function(options) {
          var keys = Object.keys(options);
          var attributes = '';

          for (var i = 0; i < keys.length; i++) {
            var currentKey = keys[i];
            var value = options[currentKey];
            attributes += currentKey + '="' + value + '" ';
          }

          return '<script ' + attributes + '></script>';
        })
       .join('');
    }
  }
};
