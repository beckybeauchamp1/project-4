App.Routers.College = Backbone.Router.extend({
  routes: {
    '' : 'index',
    'colleges/:id' : 'show'
  },
  initialize: function(){
    App.Collections.colleges = new App.Collections.Colleges();
    App.Views.collegeList = new App.Views.CollegeList({collection: App.Collections.colleges});
    App.Collections.tagsCollection = new App.Collections.Tags();
    App.Views.tagList = new App.Views.TagsList({collection: App.Collections.tagsCollection});
  },
  index: function(){
    App.Collections.colleges.fetch().then(function(){
      App.Views.collegeList.searchStates();
      App.Views.collegeList.buttonClick();
      App.Views.collegeList.clickOnState();
    });
  },
  show: function(id){
    App.Collections.colleges.fetch().then(function(college){
      view = App.Views.collegeList.findId(id);
      view.hideSearch();
      view.renderCollege();
      App.Collections.tagsCollection.fetch();
    });
  },
});
