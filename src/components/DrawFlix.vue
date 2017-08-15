<template>
  <div class="drawFlix">
    <div v-for="movie in this.movies">
      <h1 @click=>{{movie.show_title}}</h1>
    </div>
      <h1>{{movie.show_title}}</h1>      

  </div>
</template>


<script>
export default {
  name: 'drawFlix',
  props: ["movies"],
  data(){
    return { 
      movie: {}
    }

  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>