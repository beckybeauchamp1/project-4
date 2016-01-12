App.Views.Event = Backbone.View.extend({
  className: 'events-class',
  tagName: 'p',
  events: {
    'click .submitEvent': 'createEvent'
  },
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.template = Handlebars.compile($("#eventTemplate").html());
    this.render();
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },
  showEventForm: function(){
    var self = this;
    $(".submitEvent").on("click", function(){
      event.preventDefault();
      App.Collections.colleges.searchByName();
    });
  },
  createEvent: function(){
    event.preventDefault();
    var eventData = {
      title: this.$("[name='authorName']").val(),
      image: this.$("[name='content']").val(),
      content: this.$("[name='content']").val(),
      start_date: this.$("[name='content']").val(),
      end_date: this.$("[name='content']").val(),
      starting_time: this.$("[name='content']").val(),
      ending_time: this.$("[name='content']").val(),
      cost: this.$("[name='content']").val()
    };
    // not sure if i can do this.model in event or need to move thisfunction
    // to the college.js page
    this.model.events.create(eventData);
  }
});
