const key = 'a4fd9484b5bfcf9f9adc8be2d2bcc979'

const request = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&query=horror&page=1`,
    requestHorror:   `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1`,
}

export default request;