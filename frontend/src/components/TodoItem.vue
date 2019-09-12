<template>
    <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
        <div class="checkboxes-combo">
            <input type="checkbox" v-on:change="markComplete">
            <input type="checkbox" v-on:change="markDoing">
            {{ todo.title }}
        </div>
        <div class="doing-delete">
            <span id="doing" v-if="todo.doing">DOING <i class="fa fa-spinner" aria-hidden="true"></i></span>
            <button @click="$emit('del-todo', todo)" class="del"><i class="fa fa-trash-o"></i></button>
        </div>    
    </div>
</template>

<script>
export default {
    name: "TodoItem",
    props: ["todo"],
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
        },
        markDoing() {
            this.todo.doing = !this.todo.doing;
        }
    }
}
</script>

<style scoped>
.todo-item {
    display: flex;
    justify-content: space-between;
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px #ccc dotted;
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
</style>