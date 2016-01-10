App.Views.CollegeList = Backbone.View.extend({
  el: '#colleges',
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
  },
  renderAll: function(){
    App.Routers.college.navigate('');
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }
});
