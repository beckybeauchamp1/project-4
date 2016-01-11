App.Views.College = Backbone.View.extend({
  className: 'college',
  el: '#colleges',
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#collegeTemplate").html());
  },
  render: function(){
    App.Routers.college.navigate('colleges/' +  this.model.id);
    console.log("render");
    event.preventDefault();
    this.$el.html(this.template(this.model.toJSON()));
  },
  renderCollege: function(){
    App.Routers.college.navigate('colleges/' + this.model.id);
    this.$el.html(this.template(this.model.toJSON()));
  },
  hideSearch: function(){
    console.log("hide search");
    this.$el.empty();
    $(".dropdown-toggle").hide();
  }
});
