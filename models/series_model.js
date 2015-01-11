var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var SeriesSchema = new Schema({
    SeriesTitle: String,
    IsEpisodic: Boolean,
    SeriesId: String,
    Tier: Number,
    Metacritic: Number,
    MyRating: Number,
    ViewingLocations: [String],
    DateAdded: Date,
    ActiveEpisodes: Number,
    DeletedEpisodes: Number,
    SuggestionEpisodes: Number,
    UnwatchedEpisodes: Number,
    LastUnwatched: Date,
    MostRecent: Date,
    tvdbId: Number,
    tvdbName: String,
    tvdbAirsDayOfWeek: String,
    tvdbAirsTime: String,
    tvdbFirstAired: Date,
    tvdbGenre: [String],
    tvdbNetwork: String,
    tvdbOverview: String,
    tvdbRating: Number,
    tvdbRatingCount: Number,
    tvdbRuntime: Number,
    tvdbStatus: String,
    tvdbPoster: String,
    tvdbEpisodes: [{
        OnTiVo: Boolean,
        TiVoDescription: String,
        TiVoEpisodeTitle: String,
        TiVoShowingStartTime: Date,
        TiVoDeletedDate: Date,
        TiVoSuggestion: String,
        Watched: Boolean,
        WatchedDate: Date,
        tvdbEpisodeId: String,
        tvdbSeason: Number,
        tvdbEpisodeNumber: Number,
        tvdbEpisodeName: String,
        tvdbFirstAired: Date,
        tvdbOverview: String
    }]
}, {_id : true});
mongoose.model('series', SeriesSchema);
