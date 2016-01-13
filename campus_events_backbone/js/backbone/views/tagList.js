App.Views.TagsList = Backbone.View.extend({
  className: 'tags',
  el: '#tags',
  views: [],
  initialize: function(){
    console.log("initalize tag list view");
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  renderAll: function(){
    console.log("render all tags");
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(tag){
    console.log("renderOne");
    console.log(tag);
    var displayTag = new App.Views.Tag({model: tag});
    console.log(displayTag);
    this.views.push(displayTag);
  }
});
