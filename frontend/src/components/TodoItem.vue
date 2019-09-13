<template>
  <div class="todo-item">
    <div class="checkboxes-combo">
      <div class="checkbox-options">
        <span id="checkbox-label">Finish</span>
        <input type="checkbox" v-on:change="$emit('mark-complete', todo)" :checked="todo.completed" />
      </div>
      <div class="checkbox-options">
        <span id="checkbox-label">Doing</span>
        <input type="checkbox" v-on:change="$emit('mark-doing', todo)" :checked="todo.doing" />
      </div>
      <span id="todo-title" v-bind:class="{'is-complete':todo.completed}">{{ todo.title }}</span>
    </div>
    <div class="doing-delete">
      <span id="doing" v-if="todo.doing">DOING...</span>
      <button @click="$emit('del-todo', todo._id)" class="del">
        <i class="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
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
  font-family: monospace;
  font-weight: bold;
  font-size: 1.2rem;
  color: #1e90ff;
}
</style>