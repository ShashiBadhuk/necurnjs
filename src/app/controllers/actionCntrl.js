(function() {
  'use strict';
  var actionCntrls = {
    onViewDoc: function() {
      window.location.href = "/#/docs/intro";
    },
    onDownload: function() {
      window.open('./assets/js/necurn.min.js', "_blank");
    }
  };
  module.exports = actionCntrls;
})();
