App.Views.User = Backbone.View.extend({
  className: 'user-login',
  el: "#users",
  initialize: function(){
    console.log("initialize user model");
    this.listenTo(this.model, 'change', this.render);
    this.userTemplate = Handlebars.compile($("#userformTemplate").html());
    this.toggleUserForm();
  },
  toggleUserForm: function(){
    var self = this;
    $(".signup").on("click", function(){
      event.preventDefault();
      event.stopPropagation();
      alert("hey");
      console.log(self.userTemplate);
      $(".newForm").hide();
      $("#new-event-modal").append(self.userTemplate({}));
      $("#new-event-modal").show();
      self.closeUserForm();
    });
  },
  closeUserForm: function(){
    var self = this;
    $("#close").on("click", function(){
      event.preventDefault();
      event.stopPropagation();
      $("#new-event-modal").hide();
      $(".user-signup-form").hide();
    });
  },
});
