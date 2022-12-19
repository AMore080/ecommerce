const { RESTDataSource } = require('@apollo/datasource-rest');

class MoviesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://api.themoviedb.org/3/'
    }
    
    async getNowPlaying() {
        const data = await this.get(`/movie/now_playing?api_key=${process.env.API_KEY}`)
        return data.results;
    }

    async getMovie(id) {
        const data = await this.get(`/movie/${id}?api_key=${process.env.API_KEY}&language=en-US`)
        return data;
    }

    async searchMovie(search) {
        const data = await this.get(`/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`)
        return data.results;
    }

    async movieDiscovery() {
        const data = await this.get(`discover/movie?api_key=` + 
        `${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&certification_country=US&include_adult=false&include_video=false&page=${Math.floor(Math.random() * 500)}&with_watch_monetization_types=flatrate
        `)
        return data.results;
    }
}

module.exports = MoviesAPI;