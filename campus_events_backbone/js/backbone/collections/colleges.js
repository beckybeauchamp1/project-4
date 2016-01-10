App.Collections.Colleges = Backbone.Collection.extend({
  model: App.Models.College,
  url: "http://localhost:3000/colleges"
});
