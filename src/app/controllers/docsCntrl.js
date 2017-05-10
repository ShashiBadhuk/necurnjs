(function() {
  'use strict';
  var Necurn = require('./../../../lib/necurn.min');
  var docsLayout = require('./../templates/docs.layout.tpl');
  var docsSidemenuTpl = require('./../templates/docs.menu.tpl');
  var docsSidemenus = require('./../assets/json/docs.menu.json');
  var docsIntroTpl = require('./../templates/docs/docs.intro.tpl');
  var docsOverviewTpl = require('./../templates/docs/docs.overview.tpl');
  var docsApplicationTpl = require('./../templates/docs/docs.application.tpl');
  var docsRouterTpl = require('./../templates/docs/docs.router.tpl');
  var docsControllerTpl = require('./../templates/docs/docs.controller.tpl');
  var docsViewTpl = require('./../templates/docs/docs.view.tpl');
  var docsModelTpl = require('./../templates/docs/docs.model.tpl');
  var docsTemplateTpl = require('./../templates/docs/docs.template.tpl');
  var docsExampleTpl = require('./../templates/docs/docs.examples.tpl');
  var docsHelpTpl = require('./../templates/docs/docs.help.tpl');

  var docsCntrl = new Necurn.Controller({
    layout: docsLayout,
    container: '.container',
    regions: {
      'menu': '.drawerMenu',
      'content': '.docContents'
    },
    init: function() {
      console.log("Controller is Called");
    },
    loadMenu: function(menuItemIndex) {
      docsCntrl.initLayout();
      var docsSidemenuNav = new Necurn.View({
        template: docsSidemenuTpl,
        model: docsSidemenus
      });
      docsCntrl.render(docsCntrl.regions.menu, docsSidemenuNav);
      [].slice.call(document.getElementsByClassName('nc-menu-item'))
        .forEach(function(elem) {
          elem.classList.remove('focus');
        });
      document.getElementsByClassName('nc-menu-item')[menuItemIndex].classList.add('focus');
    },
    showDocsIntro: function(menuItemIndex) {
      docsCntrl.loadMenu(0);
      var docsIntroView = new Necurn.View({
        template: docsIntroTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsIntroView);
    },
    showDocsOverview: function() {
      docsCntrl.loadMenu(1);
      var docsOverview = new Necurn.View({
        template: docsOverviewTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsOverview);
    },
    showDocsApp: function() {
      docsCntrl.loadMenu(2);
      var docsApplicationView = new Necurn.View({
        template: docsApplicationTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsApplicationView);
    },
    showDocsRouter: function() {
      docsCntrl.loadMenu(3);
      var docsRouterView = new Necurn.View({
        template: docsRouterTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsRouterView);
    },
    showDocsController: function() {
      docsCntrl.loadMenu(4);
      var docsControllerView = new Necurn.View({
        template: docsControllerTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsControllerView);
    },
    showDocsViews: function() {
      docsCntrl.loadMenu(5);
      var docsView = new Necurn.View({
        template: docsViewTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsView);
    },
    showDocsModel: function() {
      docsCntrl.loadMenu(6);
      var docsModelView = new Necurn.View({
        template: docsModelTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsModelView);
    },
    showDocsTemplate: function() {
      docsCntrl.loadMenu(7);
      var docsTemplateView = new Necurn.View({
        template: docsTemplateTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsTemplateView);
    },
    showDocsExample: function() {
      docsCntrl.loadMenu(8);
      var docsExampleView = new Necurn.View({
        template: docsExampleTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsExampleView);
    },
    showDocsHelp: function() {
      docsCntrl.loadMenu(9);
      var docsHelpView = new Necurn.View({
        template: docsHelpTpl
      });
      docsCntrl.render(docsCntrl.regions.content, docsHelpView);
    }
  });
  module.exports = docsCntrl;
})();
