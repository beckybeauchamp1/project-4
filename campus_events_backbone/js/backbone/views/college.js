App.Views.College = Backbone.View.extend({
  className: 'college',
  el: '#colleges',
  events: {
    'click button.closeForm': 'alertUser'
  },
  alertUser: function(){
    alert("hey!");
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.renderCollege);
    this.listenTo(this.model.collegeEvents, 'add', this.renderEvent);
    this.template = Handlebars.compile($("#collegeTemplate").html());
  },
  render: function(){
    App.Routers.college.navigate('colleges/' +  this.model.id);
    event.preventDefault();
  },
  renderCollege: function(){
    App.Routers.college.navigate('colleges/' + this.model.id);
    this.$el.html(this.template(this.model.toJSON()));
    this.model.collegeEvents.fetch();
    // do i need a .bind for the above??
    this.toggleEventForm();
  },
  toggleEventForm: function(){
    event.stopPropagation();
    var self = this;
    $(".toggle-event-form").on("click", function(){
      event.stopPropagation();
      $("#new-event-modal").show();
      App.Routers.college.navigate('colleges/' + self.model.id + '/new-event');
      self.closeEventForm();
      self.collegeEventListener();
    });
  },
  collegeEventListener:function(){
    var self = this;
    $(".submitEventForm").on("click", function(){
      event.stopPropagation();
      self.createEvent();
    });
  },
  createEvent: function(){
    event.preventDefault();
    event.stopPropagation();
    App.Routers.college.navigate('colleges/' + this.model.id);
    var eventData = {
      title: $("#title").val(),
      image: $("#image").val(),
      content: $("#content").val(),
      start_date: $("#start_date").val(),
      end_date: $("#end_date").val(),
      starting_time: $("#starting_time").val(),
      ending_time: $("#ending_time").val()
    };
    this.model.collegeEvents.create(eventData);
    $("#new-event-modal").hide();
  },
  closeEventForm: function(){
    var self = this;
    $(".closeForm").on("click", function(){
      App.Routers.college.navigate('colleges/' + self.model.id);
      $("#new-event-modal").hide();
    });
  },
  hideSearch: function(){
    this.$el.empty();
    $(".state-search").empty();
    $(".dropdown-toggle").hide();
  },
  renderEvent: function(data){
    var eventView = new App.Views.Event({model: data});
    $(".all-events-div").append(eventView.$el);
  }
});
