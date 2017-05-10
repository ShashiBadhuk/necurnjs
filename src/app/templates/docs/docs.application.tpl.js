(function() {
  var template = `
    <div class="necurn-app">
      <h3>Necurn Application</h3>
      <p>
        <xmp class="code-view">
          var Necurn = require('necurn');
          var appRouter = require('./app.router');
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
        </xmp>
      </p>
    </div>
  `;
  module.exports = template;
})();
