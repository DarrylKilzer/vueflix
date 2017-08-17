<template>
  <div class="drawFlix">
    <div v-if="showFavorites == true">
      <h1>Favorites</h1>
      <div v-for="movie in this.movies">
        <h3>{{movie.show_title}}</h3>
        <button @click='removeFavorite(movie)'>Remove Fav</button>
      </div>
    </div>
    <div v-else>
      <h1>Selected Movie</h1>
      <h3>{{selectedMovie.show_title}}</h3>
      <p>{{selectedMovie.summary}}</p>
    <div v-if="selectedMovie.show_title != null">
      <button @click='addFavorite(selectedMovie)'>Add Fav</button>
    </div>
      <hr>
      <h1>Results</h1>
      <div v-for="movie in this.movies">
        <h3 @click='selectMovie(movie)'>{{movie.show_title}}</h3>
      </div>
    </div>
  </div>
</template>


<script>
  import { store } from '../store'
  export default {
    name: 'drawFlix',
    props: ["movies", "showFavorites"],
    data() {
      return {
        selectedMovie: {}
      }

    },
    computed: {},
    methods: {
      selectMovie(movie) {
        this.selectedMovie = movie
      },
      addFavorite(movie) {
        store.addToFavorites(movie)
      },
      removeFavorite(movie) {
        store.removeFromFavorites(movie)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>