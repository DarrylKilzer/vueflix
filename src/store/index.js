import $ from 'jQuery'

let store = {
  search(category, query) {
    var base = 'https://netflixroulette.net/api/api.php?'
    var url = `${base}${category}=${query}`

    return new Promise(function(resolve, reject){
        $.get(url)
          .then(data =>{resolve(data)})
          .catch(error => {reject(error)});
    })
  }
}

export { store }