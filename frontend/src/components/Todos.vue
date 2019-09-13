<template>
    <div class="todoList">
        <div v-bind:key="todo._id" v-for="todo in todos">
            <TodoItem v-bind:todo="todo" 
            v-on:mark-complete="$emit('mark-complete', todo)"
            v-on:mark-doing="$emit('mark-doing', todo)"
            v-on:del-todo="$emit('del-todo', todo._id)" />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
    name: "Todos",
    components: {
        TodoItem
    },
    props: ["todos"]
}

</script>

<style scoped>
    .todoList {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 55%;
    }
</style>