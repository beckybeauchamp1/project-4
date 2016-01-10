App.Views.College = Backbone.View.extend({
  className: 'college',
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#collegeTemplate").html());
    this.render();
  },
  render: function(){
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));
  }
});
