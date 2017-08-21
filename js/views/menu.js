app.views.menu = Backbone.View.extend({
	template: Handlebars.getTemplate('menu'),
    initialize: function() {
        this.render();
    },
    render: function(){
				var context = {
					menus: [
						{name: "List", link: "#", class: ""},
						{name: "Archive", link: "#archive", class: ""},
						{name: "+", link: "#new", class: "right"},
					]
				};
				var theCompiledHtml = this.template(context);
        this.$el.html(theCompiledHtml);
    }
});
