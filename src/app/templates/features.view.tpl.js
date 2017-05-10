(function() {
  var template = `
    <div class="featuresView">
    {% var classAlign = '';
      for (var i=0; i<o.attributes.items.length; i++) { 
        classAlign = (classAlign == "features pull-left") ? "features pull-right" : "features pull-left"; %}
        <div nc-viewindex={%=i%} class="{%=classAlign %}">
          <h5> {%= o.attributes.items[i].title %}</h5>
          <p>{%= o.attributes.items[i].contents %}</p>
        </div>  
      {% } %}
    </div>
  `;
  module.exports = template;
})();
