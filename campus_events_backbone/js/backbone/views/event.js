App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: "div",
  events: {
    "click .deleteEvent": "delete",
    "click .editEvent": "edit",
    'click .create-new-tag': 'toggleTagForm',
    "click .events-img": 'showEventPage',
    "click .back": 'closeEventShowPage'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.taggedEvents, 'add', this.renderTag);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.thisEvent = Handlebars.compile($("#thisEvent").html());
    this.eventFormTemplate = Handlebars.compile($("#formTemplate").html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  // feels like this is a very BAD workaround, but was having issues regenerating all events after show page
  renderAll: function(){
    this.$el.empty();
    var views = this.model.collection.models;
    for(var i = 0; i < views.length; i++){
      App.Views.collegeView.renderEvent((views[i]));
    }
  },
  renderTag: function(data){
    console.log("rendering Tag!");
    App.Views.taggedEventsView = new App.Views.TaggedEventsView({model: data});
    $("#tags").append(App.Views.taggedEventsView.$el);
  },
  delete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },
  edit: function(){
    // using the same module to render forms so need to hide the new event form. I KNOW I need
    // to go back and create a new form template and view
    $(".newForm").hide();
    $("#new-event-modal").append(this.eventFormTemplate(this.model.toJSON()));
    $("#new-event-modal").show();
    this.closeEventForm();
    this.eventsEventListener();
  },
  closeEventForm: function(){
    $(".closeForm").on("click", function(){
      $("#new-event-modal").hide();
      $(".eventForm").hide();
    });
  },
  eventsEventListener: function(){
    var self = this;
    $(".submitEventForm").on("click", function(){
      event.stopPropagation();
      self.updateEvent();
    });
  },
  updateEvent: function() {
    event.preventDefault();
    var eventData = {
      title: $("#title2").val(),
      image: $("#image2").val(),
      content: $("#content2").val(),
      start_date: $("#start_date2").val(),
      end_date: $("#end_date2").val(),
      starting_time: $("#starting_time2").val(),
      ending_time: $("#ending_time2").val()
    };
    this.model.save(eventData);
    $("#new-event-modal").hide();
    $(".eventForm").hide();
  },
  // feel like this should be in a different view
  toggleTagForm: function(){
    event.preventDefault();
    event.stopPropagation();
    $(".toggle-tag-form").toggle();
    App.Views.tagList.createTag();

  },
  createTaggedEvent: function(id){
    console.log(id);
    console.log("creating tagged event");
    event.preventDefault();
    var data = {
      tag_id: id
    };
    this.model.taggedEvents.create(data);
  },
  // "show page" for each individual event
  showEventPage: function(){
    event.preventDefault();
    event.stopPropagation();
    $(".events-class").empty();
    this.$el.html(this.thisEvent(this.model.toJSON()));
  },
  closeEventShowPage: function(){
    event.preventDefault();
    this.renderAll();
  }
});
