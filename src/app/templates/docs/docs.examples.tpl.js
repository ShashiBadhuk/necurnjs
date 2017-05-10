(function() {
  var template = `
    <div class="necurn-example">
      <h3>Hello World - Example</h3>

      <xmp class="code-view file-index">
        
          <html>
            <head>
              <meta charset="utf-8">
              <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            </head>

            <body>
              <div class="header"></div>
              <div class="content"></div>
              <div class="footer"></div>
            </body>
            <script type="text/javascript" src="./necurn.min.js"></script>
            <script type="text/javascript" src="./app.js"></script>
          </html>

      </xmp>
      
      <xmp class="code-view file-appjs">

          document.addEventListener('DOMContentLoaded', function() {

            //App Controller 
            var helloCntrl = new Necurn.Controller({
              layout: '<div class="main"></div>',
              container: '.container',
              regions: {
                'main': '.main',
              },
              printWord: function(){
                var helloWordView = new Necurn.View({
                  template: '<p>Hello World</p>'
                });
                helloCntrl.render(helloCntrl.regions.main, helloWordView);
              }
            });

            //App Router 
            var appRouter = new Necurn.Router({
              default: {
                route: '/home',
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
                "home": helloCntrl.printWord,
              }
            });

            //Necurn Application
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
      </xmp>

    </div>
  `;
  module.exports = template;
})();
