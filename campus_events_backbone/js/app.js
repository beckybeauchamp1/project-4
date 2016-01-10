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
  Backbone.history.start();
});
