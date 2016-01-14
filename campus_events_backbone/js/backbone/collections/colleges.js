App.Collections.Colleges = Backbone.Collection.extend({

  model: App.Models.College,

  url: "http://localhost:3000/colleges",
  // is it okay to have these functions in the collection??
  searchByName: function(){
    var searchName = this.filter(function(findModel){
      var search = $(".collegeSearch").val();
      var modelFilter = new RegExp(search, "i");
      return modelFilter.test(findModel.get("name"));
    });
    App.Views.collegeList.displaySearchResults(searchName);
  },
  searchByState: function(state){
    var searchStates = this.filter(function(findModel){
      var modelFilter = new RegExp(state);
      console.log(modelFilter.test(findModel.get("state")));
      return modelFilter.test(findModel.get("state"));
    });
    App.Views.collegeList.displaySearchResults(searchStates);
  },
});
