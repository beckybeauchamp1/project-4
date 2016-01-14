App.Models.Event = Backbone.Model.extend({
  initialize: function(){
    this.taggedEvents = new App.Collections.TaggedEvents();
    this.taggedEvents.url = this.url() + '/tagged_events';
    App.Collections.taggedEvents = this.taggedEvents;
    this.listenTo(this, "change", this.updateUrl);
  },
  updateUrl: function(){
    this.taggedEvents.url = this.url() + '/tagged_events';
  }
});
