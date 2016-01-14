App.Models.College = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/colleges',
  initialize: function(){
    this.collegeEvents = new App.Collections.Events();
    App.Collections.events = this.collegeEvents;
    this.collegeEvents.url = this.url() + '/events';
    this.listenTo(this, "change", this.updateUrl);
  },
  updateUrl: function(){
    this.collegeEvents.url = this.url() + '/events';
  }
});
