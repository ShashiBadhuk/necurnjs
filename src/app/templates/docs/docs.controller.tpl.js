(function() {
  var template = `
    <div class="necurn-controller">
      <h3>Necurn Controller</h3>
      <p>
        <xmp class="code-view">
          var Necurn = require('necurn');
          var appLayout = require('./templates/app.layout.tpl');
          
          var defaultCntrl = new Necurn.Controller({
            layout: appLayout,
            container: '.container',
            regions: {
              'primary': '.primary',
              'secondary': '.secondary',
              'mainView': '.primary .mainView'
            },
            init: function() {
              console.log("controller is called");
            },
            homeView: function() {
              //View Rendering
              console.log("Home View");
            },
          });
        </xmp>
      </p>
    </div>
  `;
  module.exports = template;
})();
