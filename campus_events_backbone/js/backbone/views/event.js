App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: "div",
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.render();
  },
  render: function() {
    console.log("render" + this.model);
    this.$el.html(this.template(this.model.toJSON()));
  }
});
