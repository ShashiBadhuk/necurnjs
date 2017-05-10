(function() {
  'use strict';
  var Necurn = require('./../../../lib/necurn.min');
  var appLayout = require('./../templates/app.layout.tpl');
  var indexTpl = require('./../templates/index.tpl');
  var homeViewTpl = require('./../templates/home.view.tpl');
  var featuresViewTpl = require('./../templates/features.view.tpl');
  var featuresData = require('./../assets/json/features.json');
  var viewNotFoundTpl = require('./../templates/view404.tpl');
  var aboutViewTpl = require('./../templates/about.view.tpl');
  var actionCntrls = require('./actionCntrl');

  var defaultCntrl = new Necurn.Controller({
    layout: appLayout,
    container: '.container',
    regions: {
      'primary': '.primary',
      'secondary': '.secondary',
      'mainView': '.primary .mainView',
      'introView': '.primary .mainView .introView',
      'featuresView': '.primary .mainView .featuresView'
    },
    events: [{
      type: "click",
      selector: '.intro-action .btn-default',
      handler: actionCntrls.onViewDoc
    }, {
      type: "click",
      selector: '.intro-action .btn-primary',
      handler: actionCntrls.onDownload
    }],
    init: function() {
      console.log("controller is called");
    },
    homeView: function() {
      console.log("Home View");
      var mainView = new Necurn.View({
        template: homeViewTpl
      });
      defaultCntrl.render(defaultCntrl.regions.introView, mainView);

      var featuresModel = new Necurn.Model({
        data: featuresData,
        subModel: "items"
      });
      var featuresView = new Necurn.View({
        template: featuresViewTpl,
        model: featuresModel
      });
      defaultCntrl.render(defaultCntrl.regions.featuresView, featuresView);
    },
    showFeaturesView: function() {
      defaultCntrl.initLayout();
      var featuresModel = new Necurn.Model({
        data: featuresData,
        subModel: "items"
      });
      var featuresView = new Necurn.View({
        template: featuresViewTpl,
        model: featuresModel
      });
      defaultCntrl.render(defaultCntrl.regions.mainView, featuresView);
    },
    showAboutView: function() {
      defaultCntrl.initLayout();
      var aboutView = new Necurn.View({
        template: aboutViewTpl,
      });
      defaultCntrl.render(defaultCntrl.regions.mainView, aboutView);
    },
    gettingStarted: function() {
      console.log("Getting Started View");
    },
    view404: function() {
      console.log("Oops! Could not find It");
      var viewNotFound = new Necurn.View({
        template: viewNotFoundTpl
      });
      defaultCntrl.render(defaultCntrl.regions.mainView, viewNotFound);
    },
    foo: function() {
      console.log("Foo is called", this);

      var data = {
        "title": "JavaScript Templates",
        "license": {
          "name": "MIT license",
          "url": "https://opensource.org/licenses/MIT"
        },
        "features": [{
          "id": "1",
          "name": "lightweight & fast"
        }, {
          "id": "2",
          "name": "powerful"
        }, {
          "id": "3",
          "name": "zero dependencies"
        }]
      };

      var model = new Necurn.Model({
        data: data,
        subModel: "features"
      });

      Necurn.log('secondary');

      var testView = new Necurn.View({
        model: model,
        template: indexTpl
      });

      defaultCntrl.render(defaultCntrl.regions.secondary, testView);
    }
  });
  module.exports = defaultCntrl;
})();
