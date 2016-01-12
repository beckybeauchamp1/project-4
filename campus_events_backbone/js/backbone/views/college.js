App.Views.College = Backbone.View.extend({
  className: 'college',
  el: '#colleges',
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.events, 'add', this.renderEvent);
    this.template = Handlebars.compile($("#collegeTemplate").html());
  },
  render: function(){
    App.Routers.college.navigate('colleges/' +  this.model.id);
    console.log("render");
    event.preventDefault();
  },
  renderCollege: function(){
    App.Routers.college.navigate('colleges/' + this.model.id);
    this.$el.html(this.template(this.model.toJSON()));
    this.toggleEventForm();
  },
  toggleEventForm: function(){
    var self = this;
    $(".toggle-event-form").on("click", function(){
      $("#new-event-modal").show();
    });
  },
  hideSearch: function(){
    this.$el.empty();
    $(".state-search").empty();
    $(".dropdown-toggle").hide();
  },
  renderEvent: function(event){
    console.log("Render Event in College.js vIEW");
    var eventView = new App.Views.Event({model: event});
    this.$el.find(".events-class-div").append(eventView.$el);
  }
});
