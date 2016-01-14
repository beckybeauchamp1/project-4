App.Routers.User = Backbone.Router.extend({
  initialize: function(){
    App.Collections.users = new App.Collections.Users();
    App.Views.user = new App.Views.User({collection: App.Collections.users});
  }
});
