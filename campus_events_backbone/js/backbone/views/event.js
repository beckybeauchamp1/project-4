App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: "div",
  events: {
    "click .deleteEvent": "delete"
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  delete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  }
});
