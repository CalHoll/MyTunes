// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('dequeue', this);
  },

  ended: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('ended', this);
  }

////////////////////////////  Song Queuing functionality



  // add: function(songData) {
  //   this.songQueue.push(songData);
  //   if (this.songQueue.length === 1) {
  //     this.trigger('playFirst', this);
  //   }
  // }

  // playFirst: function() {
  //   //play index[0] in songQueue
  //   this.play(this.songQueue[0]);   // THIS NEEDS REWORK
  //   //when finished remove index[0]
  //   this.dequeue();
  //
  // }



});
