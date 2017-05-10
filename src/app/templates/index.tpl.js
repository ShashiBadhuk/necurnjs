(function() {
  var template = `
    <title>{%=o.attributes.title%}</title>
    <h3>
      <a href="{%=o.attributes.license.url%}">{%=o.attributes.license.name%}</a>
    </h3>
    <h4>Features</h4>
    <ul>
      {% 
      	for (var i=0; i<o.attributes.features.length; i++) { %}
           <li nc-viewindex={%=i%}>{%=o.attributes.features[i].name%}</li>
      {% } %}
    </ul>
  `;
  module.exports = template;
})();
