App.Collections.Tags = Backbone.Collection.extend({
  url: "http://localhost:3000/tags",
  model: App.Models.Tag
});
