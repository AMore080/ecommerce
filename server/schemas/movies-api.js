const { RESTDataSource } = require('@apollo/datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/movie/'
    }
    
    async getNowPlaying() {
        const data = await this.get(`now_playing?api_key=${process.env.API_KEY}`)
        return data.results;
    }
}

module.exports = MoviesAPI;