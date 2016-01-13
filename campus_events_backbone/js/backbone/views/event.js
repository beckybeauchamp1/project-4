App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: "div",
  events: {
    "click .deleteEvent": "delete",
    "click .editEvent": "edit"
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.eventFormTemplate = Handlebars.compile($("#formTemplate").html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
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
  }
});
