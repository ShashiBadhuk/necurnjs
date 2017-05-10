(function() {
  'use strict';
  var Necurn = require('./../../lib/necurn.min');
  var defaultCntrl = require('./controllers/default');
  var docsCntrl = require('./controllers/docsCntrl');

  var router = new Necurn.Router({
    default: {
      route: '/home',
      action: function() {
        console.log("Default Action");
      },
      before: function(next) {
        console.log("Before Route");
        next();
      },
      after: function() {
        console.log("After Route");
      }
    },
    init: function() {
      console.log("Router Initialized");
    },
    routes: {
      "home": defaultCntrl.homeView,
      "features": defaultCntrl.showFeaturesView,
      "about": defaultCntrl.showAboutView,
      "docs/intro": docsCntrl.showDocsIntro,
      "docs/overview": docsCntrl.showDocsOverview,
      "docs/app": docsCntrl.showDocsApp,
      "docs/router": docsCntrl.showDocsRouter,
      "docs/controller": docsCntrl.showDocsController,
      "docs/view": docsCntrl.showDocsViews,
      "docs/model": docsCntrl.showDocsModel,
      "docs/template": docsCntrl.showDocsTemplate,
      "docs/example": docsCntrl.showDocsExample,
      "docs": docsCntrl.showDocsIntro
    },
    notFound: defaultCntrl.view404
  });
  module.exports = router;
})();
