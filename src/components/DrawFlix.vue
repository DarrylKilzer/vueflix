<template>
  <div class="drawFlix">
    <div v-for="movie in this.movies">
      <h1 @click='info(movie)'>{{movie.show_title}}</h1>
      <div v-if='showInfo === true'>
        <br>
        <h1>Information</h1>
        <h2>{{this.movie.show_title}}</h2>
        <img :src='this.movie.poster'>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'drawFlix',
    props: ["movies", "showInfo"],
    data() {
      return {
        movie: {
          show_title: ""
        }
      }

    },
    computed: {},
    methods: {
      info(movie) {
        this.movie = movie
      }
    },
    components: {}
  }

</script>


<style scoped>

</style>