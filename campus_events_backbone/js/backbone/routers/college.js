App.Routers.College = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'colleges/:id' : 'show'
  },
  initialize: function(){
    App.Collections.colleges = new App.Collections.Colleges();
    App.Views.collegeList = new App.Views.CollegeList({collection: App.Collections.colleges});
  },
  index: function(){
    App.Collections.colleges.fetch().then(function(){
      App.Views.collegeList.searchStates();
      App.Views.collegeList.buttonClick();
    });
  },
  show: function(id){
    App.Collections.colleges.fetch().then(function(){
      view = App.Views.collegeList.findId(id);
      console.log(view);
      view.hideSearch();
      console.log(view);
      view.renderCollege();
    });
  }
});
