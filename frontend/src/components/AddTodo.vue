<template>
    <div class="addTodo">
        <form @submit="addTodo">
            <input type="text" required minlength="1" v-model="title" name="title" placeholder="Add a new todo item...">
            <input type="submit" value="Submit" class="btn" >
        </form>
    </div>
</template>

<script>
export default {
    name: "AddTodo",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodo(e) {
        e.preventDefault();
        const newTodo = {
          title: this.title,
          completed: false
        }

        this.$emit('add-todo', newTodo);

        this.title = '';
      }
    }
}
</script>

<style scoped>
  .addTodo {
    width: 55%;
    margin: 50px auto 0px auto;
  }
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="text"]::placeholder {
    font-family: monospace;
  }
  input[type="submit"] {
    flex: 2;
  }
  .btn {
    background: #000000;
    text-transform: uppercase;
    font-weight: bold;
    font-family: monospace;
  }
</style>