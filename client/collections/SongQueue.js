// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      // need to implement some condition to run the playFirst
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      // console.log('before the shift: ' + JSON.stringify(this, null, 2));
      this.shift();
      // console.log('after the shift: ' + JSON.stringify(this, null, 2));
      // if more exist in list, play next in line
      if (this.length >= 1) {
        this.playFirst();
      }
    });

    //Added a remove event to listen for:
    // this.on('remove', function(song) {
    //   this.remove(song);
    // });
  },

  playFirst: function() {
    this.at(0).play();
  },

  // causes infinite loop
  remove: function(song) {
    console.log(JSON.stringify(song));
    // this.(song);
  },

});
