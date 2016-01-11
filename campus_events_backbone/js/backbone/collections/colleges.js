App.Collections.Colleges = Backbone.Collection.extend({

  model: App.Models.College,

  url: "http://localhost:3000/colleges",

  searchByName: function(){
    console.log("function happening");
    var searchName = this.
    filter(function(findModel){
      var search = $(".collegeSearch").val();
      var modelFilter = new RegExp(search, "i");
      return modelFilter.test(findModel.get("name"));
    });
    App.Views.collegeList.displaySearchResults(searchName);
  }

});
