App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: "div",
  events: {
    "click .deleteEvent": "delete",
    "click .editEvent": "edit",
    'click .create-new-tag': 'toggleForm',
    "click .tag-form-submit": 'createTag',
    "click .events-img": 'showEventPage',
    "click .back": 'closeEventShowPage'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.thisEvent = Handlebars.compile($("#thisEvent").html());
    this.eventFormTemplate = Handlebars.compile($("#formTemplate").html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  renderAll: function(){
    this.$el.empty();
    var views = this.model.collection.models;
    for(var i = 0; i < views.length; i++){
      App.Views.collegeView.renderEvent((views[i]));
    }
  },
  delete: function(){
    this.model.destroy();
    this.$el.fadeOut();
  },
  edit: function(){
    $(".newForm").hide();
    $("#new-event-modal").append(this.eventFormTemplate(this.model.toJSON()));
    $("#new-event-modal").show();
    this.closeEventForm();
    this.eventsEventListener();
  },
  closeEventForm: function(){
    var self = this;
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
  toggleForm: function(){
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
    $(".toggle-tag-form").toggle();
  },
  createTag: function(){
    event.preventDefault();
    event.stopPropagation();
    if($(".tag-form-text-input").val() !== ""){
      var tagData = {
        title: $(".tag-form-text-input").val(),
        event_id: parseInt($(".tag-form-text-input").attr("id"))
      };
      App.Collections.tagsCollection.create(tagData);
    }
    $(".tag-form-text-input").val("");
    $(".toggle-tag-form").hide();
  },
  showEventPage: function(){
    var self = this;
    event.preventDefault();
    event.stopPropagation();
    console.log(this.view);
    console.log(this.$el);
    $(".events-class").empty();
    this.$el.fadeIn(function(){
      self.$el.html(self.thisEvent(self.model.toJSON()));
    });
  },
  closeEventShowPage: function(){
    event.preventDefault();
    this.renderAll();
  }
});
