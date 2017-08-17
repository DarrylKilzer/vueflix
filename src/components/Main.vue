<template>
  <div class="main">
    <div class="row">
      <div class="col-xs-12">
        <form @submit.prevent="search()">
          <input type="text" v-model="query">
          <input type="radio" id="actor" value="actor" v-model="category">
          <label for="actor">Actor</label>
          <input type="radio" id="director" value="director" v-model="category">
          <label for="director">Director</label>
          <input type="radio" id="title" value="title" v-model="category">
          <label for="title">Title</label>
          <button type="submit">search</button>
        </form>
        <div class="row">
          <div class="col-xs-6">
            <drawFlix :movies='this.results' :showInfo='true'></drawFlix>
          </div>
          <div class="col-xs-6">
            <drawFlix :movies='this.favorites' :showInfo='false'></drawFlix>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { store } from '../store'
  import drawFlix from './DrawFlix'
  export default {
    name: 'main',
    data() {
      return {
        category: '',
        results: [],
        query: '',
        details: {},
        favorites: store.state.favorites
      }
    },
    methods: {
      search() {
        store.search(this.category, this.query)
          .then(res => {
            this.results = res
          })
      }
    },
    components: {
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