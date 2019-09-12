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
import api from '../../services/api'

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
  created() {
        api
            .get("/todo")
            .then(response => this.todos = response.data)
  },
  methods: {
    deleteTodo(selectedTodo) {
        api
            .delete(`/todo/${selectedTodo._id}`)
            .then(this.todos = this.todos.filter(todo => todo._id !== selectedTodo._id))
    },
   addTodo(newTodo) {
        api
            .post("/todo", {
              title: newTodo.title,
              completed: newTodo.completed
            })
            .then(this.todos = [...this.todos, newTodo])
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
