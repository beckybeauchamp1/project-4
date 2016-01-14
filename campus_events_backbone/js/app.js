App = {
  Models: {},
  Views: {
    grumbleViews: []
  },
  Collections: {},
  Routers: {}
};

$(document).ready(function(){
  App.Routers.college = new App.Routers.College();
  App.Routers.user = new App.Routers.User();
  Backbone.history.start();
});
