angular.module('mediaMogulApp')
  .controller('movieController', ['EpisodeService',
  function(EpisodeService) {
    var self = this;

    self.unwatchedOnly = true;
    self.episodes = [];

    self.episodeFilter = function(episode) {
      return !episode.IsEpisodic && (!self.unwatchedOnly || !episode.Watched);
    };

    EpisodeService.updateSeriesList().then(function() {
      self.episodes = EpisodeService.getSeriesList();
    });

    self.change = function(episode) {
      EpisodeService.markWatched(episode._id, episode.Watched);
    };
  }]);