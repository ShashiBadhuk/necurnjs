(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var Necurn = require('./../../lib/necurn.min');
    var appRouter = require('./router');
    var App = new Necurn.Application({
      region: {
        'header': '.header',
        'container': '.container',
        'footer': '.footer'
      },
      router: appRouter,
      before: function() {
        console.log("Before App Initialization.");
      },
      init: function() {
        console.log("App init is called");
      }
    });
  });
})();
