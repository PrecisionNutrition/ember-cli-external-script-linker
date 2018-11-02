'use strict';

module.exports = {
  name: require('./package').name,

  included() {
    this._super.included.apply(this, arguments);

    this.ui.writeDeprecateLine('[ember-cli-external-script-linker] This project is deprecated and will no longer receive updates. Please use https://github.com/ronco/ember-cli-head instead.');
  },

  contentFor(type, config) {
    if (type === 'head-footer') {
      let scriptOptions = config.externalScriptTags || [];

      return scriptOptions
       .map(function(options) {
          let keys = Object.keys(options);
          let attributes = '';

          for (let i = 0; i < keys.length; i++) {
            let currentKey = keys[i];
            let value = options[currentKey];
            attributes += `${currentKey}=${value} `;
          }

          return `<script ${attributes}></script>`;
        })
       .join('');
    }
  }
};
