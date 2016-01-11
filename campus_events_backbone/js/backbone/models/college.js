App.Models.College = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/colleges',

  initialize: function(){
    console.log("initialize college model with events")
    this.events = new App.Collections.Events();
    console.log(this.events);
    this.events.url = this.url() + '/events';
    this.listenTo(this, "change", this.updateUrl);
  },
  updateUrl: function(){
    this.events.url = this.url() + '/events';
  }
});
