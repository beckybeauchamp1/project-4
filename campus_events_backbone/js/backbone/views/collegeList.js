App.Views.CollegeList = Backbone.View.extend({
  el: '#colleges',
  views: [],
  initialize: function(){
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  renderAll: function(){
    App.Routers.college.navigate('');
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },
  renderOne: function(college){
    console.log("render one");
    var collegeView = new App.Views.College({model: college});
    this.views.push(collegeView);
  },
  searchStates: function(){
    var self = this;
    var colleges = App.Collections.colleges;
    var state = colleges.pluck("state");
    var states = [];
    filterStates();
    function filterStates(){
      for(var i = 0; i < state.length ; i++){
        if (states.indexOf(state[i]) === -1){
          console.log("Not in the array");
          states.push(state[i]);
        }
      }
      App.Views.collegeList.showStates(states);
    }
  },
  showStates: function(states){
    for(var i = 0; i < states.length; i++){
      console.log(states[i]);
      $(".state-list").append("<li><a href='#'>" + states[i] + "</a></li>");
    }
  },
  displaySearchResults: function(searchResults){
    for(i=0;i<searchResults.length;i++) {
      var collegeId = $("<a href='#colleges/" + searchResults[i].get('id') + "'></a>").text(searchResults[i].get('name'));
      collegeId.addClass("college-search-results");
      $('.state-search').append(collegeId);
    }
  },
  buttonClick: function(){
    var self = this;
    $(".submit").on("click", function(){
      event.preventDefault();
      App.Collections.colleges.searchByName();
    });
  },
  findId: function(id){
    for(var i = 0; i < this.views.length; i++){
      if(this.views[i].model.get("id") == id){
        var view = this.views[i];
        console.log(this.views[i]);
        return view;
      }
    }
  }
});
