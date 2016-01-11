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
  },
  renderOne: function(college){
    console.log("render one");
    var collegeView = new App.Views.College({model: college});
    this.$el.prepend(collegeView.$el);
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
      div = $('<div></div>').text(searchResults[i].get('name'));
      $('.state-search').append(div);
    }
  },
  buttonClick: function(){
    var self = this;
    $(".submit").on("click", function(){
      event.preventDefault();
      App.Collections.colleges.searchByName();
    });
  }
});
