import $ from 'jquery'

var state = {
  results: [],
  favorites: []
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
  addToFavorites(movie){
    state.favorites.push(movie)
  },
  removeFromFavorites(movie){
    var index = state.favorites.indexOf(movie)
    state.favorites.splice(index, 1)
  }
}

export { store }