App.Views.College = Backbone.View.extend({
  className: 'college',
  el: '#colleges',
  tagName: 'li',
  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model.events, 'add', this.renderEvent);
    this.template = Handlebars.compile($("#collegeTemplate").html());
    this.eventTemplate = Handlebars.compile($("#eventFormTemplate").html());
  },
  render: function(){
    App.Routers.college.navigate('colleges/' +  this.model.id);
    console.log("render");
    event.preventDefault();
  },
  renderCollege: function(){
    App.Routers.college.navigate('colleges/' + this.model.id);
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.append(this.eventTemplate(this.model.toJSON()));
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
    this.model.events.create(eventData);
  }
});
