<template>
  <div id="app">
    <div class="header">
      <Header />
    </div>
    <div class="list-component">
      <AddTodo v-on:add-todo="addTodo" />
      <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
    </div>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Todos from '../components/Todos'
import AddTodo from '../components/AddTodo'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Header,
    Todos,
    AddTodo,
    Footer
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addTodo(newTodo) {
        this.todos = [...this.todos, newTodo]
    }
  },
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    display: flex;
    flex-flow: column;
    height: 100vh;
  }

  .header {
    flex: 0 1 auto;
  }

  .list-component {
    flex: 1 1 auto;
  }

  .footer {
    flex: 0 1 auto;
    align-self: flex-end;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    font-family: 'Raleway', sans-serif;
  }
  .btn:hover {
    background: #666;
  }
</style>
