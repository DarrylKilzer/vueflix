<template>
  <div class="drawFlix">
    <div v-if='showInfo === true'>
      <div v-for="movie in this.movies">
        <h1 @click='info(movie)'>{{movie.show_title}}</h1>
      </div>
      <br>
      <h1>Information</h1>
      <h2>{{this.movie.show_title}}</h2>
      <img :src='this.movie.poster'>
      <button @click='addFav(movie)'>Add to Favs</button>
    </div>
    <div v-else>
      <br>
      <h1>Favs</h1>
      <div v-for="movie in this.movies">
        <h2>{{this.movie.show_title}}</h2>
        <img :src='this.movie.poster'>
        <button @click='removeFav(movie)'>Remove from Favs</button>
      </div>
    </div>
  </div>
</template>


<script>
  import { store } from '../store'
  export default {
    name: 'drawFlix',
    props: ["movies", "showInfo", "showFavs"],
    data() {
      return {
        movie: {}
      }

    },
    computed: {},
    methods: {
      info(movie) {
        this.movie = movie
      },
      addFav(movie) {
        store
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>