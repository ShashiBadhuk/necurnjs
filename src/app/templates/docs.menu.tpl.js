(function() {
  var sidemenunav = `<div id="sidemenunav" class="sidenav">
      {%
        for(var i=0;i<o.items.length; i++) { %}
           <a class="nc-menu-item" href="{%= o.items[i].link%}">{%= o.items[i].text%}</a>
      {% } %}
	  </div>`;
  module.exports = sidemenunav;
})();
