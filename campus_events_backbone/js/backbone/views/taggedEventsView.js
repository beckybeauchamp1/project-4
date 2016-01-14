App.Views.TaggedEventsView = Backbone.View.extend({
  className: 'tags-class-list',
  tagName: "li",
  events: {
    'click .tag-form-submit': 'create'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#tagTemplate").html());
    this.render();
  },
  render: function() {
    var tagList = this.$el.html(this.template(this.model.toJSON()));
    $(".tag-heading").append(tagList);
  },
  delete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },
});
