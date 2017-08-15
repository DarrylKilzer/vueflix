<template>
  <div class="hello">
    <input type="text" v-model="query">
    <br>
    <input type="radio" id="actor" value="actor" v-model="category">
    <label for="actor">Actor</label>
    <input type="radio" id="director" value="director" v-model="category">
    <label for="director">Director</label>
    <input type="radio" id="title" value="title" v-model="category">
    <label for="title">Title</label>
    <button @click="search()">search</button>
    <drawFlix :movies='this.results'></drawFlix>
    <drawFlix :movies='this.favorites'></drawFlix>
  </div>
</template>

<script>
import { store } from '../store'
import drawFlix from './DrawFlix'
export default {
  name: 'hello',
  data() {
    return {
      category: '',
      query: '',
      results: [],
      details: {},
      favorites: []
    }
  },
  methods: {
    search() {
      store.search(this.category, this.query)
        .then(data => {
          console.log(data)
          this.results = data
        })
    }
  },
  components:{
    drawFlix
  }
}
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
