App.Views.CollegeList = Backbone.View.extend({
  el: '#colleges',
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  renderAll: function(){
    App.Routers.college.navigate('');
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  }
  renderOne: function(college){
    var collegeView = new App.Views.College({model: college});
    this.$el.prepend(collegeView.$el);
  }
});
