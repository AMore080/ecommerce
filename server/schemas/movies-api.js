const { RESTDataSource } = require('@apollo/datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/movie/'
    }
    
    async getNowPlaying() {
        const data = await this.get(`movie/now_playing?api_key=${process.env.API_KEY}`)
        return data.results;
    }

    async getMovie(id) {
        const data = await this.get(`movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
        return data;
    }

    async getPopularMovies() {
        const data = await this.get(`movie/popular?api_key=${process.env.API_KEY}`)
        return data.results;
    }

    // async getSearchMovie() {
    //     const data = await this.get(`search/movie?query=${search}&api_key=${process.env.API_KEY}&language=en-US&page=1&include_adult=false`)
    //     return data.results;
    // }

}

module.exports = MoviesAPI;