<template>
  <div id="app">
    <input type="text" v-model="message" />

    <span v-if="seen">Now you see me</span>

    <ol>
      <li v-bind:key="todo.text" v-for="todo in todos">{{ todo.text }}</li>
    </ol>

    <button v-on:click="reverseMessage">Reverse Message</button>

    <router-link to="/">Home!</router-link>
    <router-link to="/login">LOGIN!</router-link>
    <main class="">  
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      message: "Hello world!!!!",
      seen: false,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Build something awesome" }
      ]
    };
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
