App.Routers.College = Backbone.Router.extend({
  routes: {
    '' : 'index'
  },
  initialize: function(){
    App.Collections.colleges = new App.Collections.Colleges();
    App.Views.collegeList = new App.Views.CollegeList({collection: App.Collections.colleges});
  },
  index: function(){
    App.Collections.colleges.fetch().then(function(){
      console.log("fetched colleges");
    });
  }
});
