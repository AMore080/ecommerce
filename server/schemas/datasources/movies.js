const { RESTDataSource } = require('apollo-datasource-rest');

class MoviesApi extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = "https://api.themoviedb.org/3/movie/"
    }

    async getNowPlaying() {
        return this.get('/now_playing')
    }
}