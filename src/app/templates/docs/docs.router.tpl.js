(function() {
  var template = `
    <div class="introView">
      <h3>Necurn Router</h3>
      <p></p>
      <div class="code-container">
         <pre class="code-view"> 
          var Necurn = require('necurn');
          var router = new Necurn.Router({
            routes: {
              "home": defaultCntrl.homeView,
              "docs/intro": docsCntrl.showDocsIntro,
            }
          });
      </pre>
      </div>
    </div>
  `;
  module.exports = template;
})();
