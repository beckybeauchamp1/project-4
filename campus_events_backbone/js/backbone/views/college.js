App.Views.College = Backbone.View.extend({
  className: 'college',
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#collegeTemplate").html());
  },
  render: function(){
    console.log("render");
    console.log(this.model);
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));
  }
});
