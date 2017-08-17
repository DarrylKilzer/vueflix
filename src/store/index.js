import $ from 'jQuery'


var state = {
  results: [],
  favs: []
}

let store = {
  state: state,
  search(category, query) {
    var base = 'https://netflixroulette.net/api/api.php?'
    var url = `${base}${category}=${query}`

    return new Promise(function(resolve, reject){
        $.get(url) 
          .then(data =>{resolve(data)})
          .catch(error => {reject(error)});
    })
  },
  addToFavs(movie){
    state.favs.push(movie)
  }
}

export { store }