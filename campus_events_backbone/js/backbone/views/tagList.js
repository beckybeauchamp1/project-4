App.Views.TagsList = Backbone.View.extend({
  className: 'tags',
  el: '#tags',
  events: {
    "click .tag-form-submit": 'createTag'
  },
  views: [],
  initialize: function(){
    console.log("initalize tag list view");
    this.listenTo(this.collection, 'reset', this.renderAll);
    this.listenTo(this.collection, 'add', this.renderOne);
  },
  renderAll: function(){
    this.$el.empty();
    this.collection.each(this.renderOne.bind(this));
  },
  createTag: function(){
    var self = this;
    $(".tag-form-submit").on("click", function(){
      event.preventDefault();
      event.stopPropagation();
      if($(".tag-form-text-input").val() !== ""){
        var tagData = {
          title: $(".tag-form-text-input").val(),
          event_id: parseInt($(".tag-form-text-input").attr("id"))
        };
        self.collection.create(tagData);
        // var newTag = App.Collections.tagsCollection.create(tagData);
        // this.createTaggedEvent(newTag);
        // this.model.taggedEvents.create(newTag);
      }
      $(".tag-form-text-input").val("");
      $(".toggle-tag-form").hide();
    });
  },
  renderOne: function(tag){
    console.log("Rendering One!");
    console.log(tag);
    var displayTag = new App.Views.Tag({model: tag});
    this.views.push(displayTag);
  }
});
