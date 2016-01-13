App.Views.Tag = Backbone.View.extend({
  className: 'tags-class-list',
  tagName: "li",
  initialize: function(){
    console.log("initialize tag model");
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#tagTemplate").html());
    this.render();
  },
  render: function() {
    var tagList = this.$el.html(this.template(this.model.toJSON()));
    console.log("appending");
    $(".tag-heading").append(tagList);
  },
  delete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  }
});
