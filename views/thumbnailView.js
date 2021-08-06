var ThumbnailViews = Backbone.View.extend({
  template: Handlebars.compile($('#video-thumbnail-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})