(function() {
  var template = `
    <div class="necurn-controller">
      <h3>Necurn Model</h3>
      <p>
        <xmp class="code-view">
          var rawData = {
            "title": "NecurnJS MVC Framework",
            "license": {
              "name": "MIT license",
              "url": "https://opensource.org/licenses/MIT"
            },
            "features": [{
              "id": "1",
              "name": "Lightweight MVC Framework"
            }, {
              "id": "2",
              "name": "Easy and Powerfull"
            }, {
              "id": "3",
              "name": "ZERO Dependencies"
            }]
          };

          var homeModel = new Necurn.Model({
            data: rawData,
            subModel: "features"
          });

        </xmp>
      </p>
    </div>
  `;
  module.exports = template;
})();
