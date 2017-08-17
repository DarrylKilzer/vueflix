<template>
  <div class="drawFlix">
    <div v-if='showInfo === true'>
      <h1>Information</h1>
      <h2>{{movie.show_title}}</h2>
      <img :src='this.movie.poster'>
      <div>
        <button @click='addFav(movie)'>Add to Favs</button>
      </div>
      <div v-for="movie in this.movies">
        <h1 @click='info(movie)'>{{movie.show_title}}</h1>
      </div>
    </div>
    <div v-else>
      <h1>Favs</h1>
      <div v-for="movie in this.movies">
        <h2>{{movie.show_title}}</h2>
        <button @click='removeFav(movie)'>Remove from Favs</button>
      </div>
    </div>
  </div>
</template>


<script>
  import { store } from '../store'
  export default {
    name: 'drawFlix',
    props: ["movies", "showInfo"],
    data() {
      return {
        movie: {}
      }

    },
    computed: {},
    methods: {
      info(movie) {
        this.movie = movie
        //hideButton = false
      },
      addFav(movie) {
        store.addToFavs(movie)
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>