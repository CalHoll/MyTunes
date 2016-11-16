// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {

      // THIS HAS TO BE INCLUDED TO PASS ALL SPEC RUNNER TESTS, BUT REMOVES
      // FUNCTIONALITY FROM THE APP BY PLAYING ON EACH CLICK.
      // this.model.play();

      this.model.enqueue();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
