(function() {
  var template = `
    <div class="necurn-controller">
      <h3>Necurn View</h3>
      <p>
        <xmp class="code-view">
          var Necurn = require('necurn');
          var homeViewTpl = require('./templates/home.view.tpl');
          var homeDataModel = require('./model/home.data.model');

          var mainView = new Necurn.View({
            template: homeViewTpl,
            model:homeDataModel
          });
          defaultCntrl.render(defaultCntrl.regions.mainView, mainView);

        </xmp>
      </p>
    </div>
  `;
  module.exports = template;
})();
