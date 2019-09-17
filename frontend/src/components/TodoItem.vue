<template>
  <div class="todo-item">
    <div class="main-column">
      <div class="checkboxes-combo">
        <div class="checkbox-options">
          <span id="checkbox-label">Done</span>
          <input type="checkbox" v-on:change="$emit('mark-complete', todo)" :checked="todo.completed" />
        </div>
        <div class="checkbox-options">
          <span id="checkbox-label">Doing</span>
          <input type="checkbox" v-on:change="$emit('mark-doing', todo)" :checked="todo.doing" />
        </div>
        <div class="checkbox-options">
        </div>
        <span id="todo-title" v-bind:class="{'is-complete':todo.completed}">{{ todo.title }}</span>
      </div>
      <div class="doing-delete">
        <span id="doing" v-if="todo.doing">DOING...</span>
        <button v-on:click="$emit('show-commentary', todo)">
            <i class="fa fa-minus" v-if="todo.showCommentary" aria-hidden="true"></i>
            <i class="fa fa-plus" v-else aria-hidden="true"></i>
        </button>
        <button @click="$emit('del-todo', todo._id)" class="del">
          <i class="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
    <div class="input-column" v-show="todo.showCommentary">
      <div v-bind:key="commentary" v-for="commentary in todo.commentaries">
        <span id="commentary">{{ commentary }} <button @click="deleteCommentary(todo, commentary)" class="del-commentary">x</button></span>
      </div>  
      <form @submit.prevent="setCommentary(todo)" class="form-commentary">
        <input type="text" v-model="commentary" placeholder="Add a new commentary..." id="input-commentary" >
        <input type="submit" value="Add" class="btn" >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  data() {
    return {
      commentary: ''
    }
  },
  methods: {
    setCommentary(todo) {
      todo.commentaries.push(this.commentary);
      
      this.$emit('add-commentary', todo);

      this.commentary = '';
    },

    deleteCommentary(todo, commentary) {
      const index = todo.commentaries.indexOf(commentary);
      todo.commentaries.splice(index, 1);
      
      this.$emit('del-commentary', todo);
    }
  }
}
</script>

<style scoped>
.todo-item {
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.main-column {
  display: flex;
  justify-content: space-between;
}
.checkboxes-combo {
    display: flex;
}
.checkbox-options {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#checkbox-label {
    font-family: monospace;
    font-weight: bold;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-right: 5px;
}
#todo-title {
    margin-left: 10px;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  color: red;
  background: #f4f4f4;
  border: none;
  padding: 5px 9px;
  cursor: pointer;
  font-size: 1.1rem;
}
#doing {
  margin: 5px;
  font-family: monospace;
  font-weight: bold;
  font-size: 1.2rem;
  color: #1e90ff;
}
.form-commentary {
  display: flex;
}
input[type='text'] {
  flex: 50;
  font-family: monospace;
}
input[type="submit"] {
  flex: 1;
}
.btn {
  background: #000000;
  text-transform: uppercase;
  font-weight: bold;
  font-family: monospace;
}
.del-commentary {
  color: red;
  background: #f4f4f4;
  border: none;
  padding: 5px 9px;
  cursor: pointer;
  font-size: 0.7rem;
}
#commentary {
  font-family: monospace;
}
</style>