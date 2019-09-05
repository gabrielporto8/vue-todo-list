<template>
    <header class="header">
        <div class="title-content">
            <h1 class="main-title">TodoList</h1>
            <h4 class="main-subtitle">A todo list made with Vue.js</h4>
        </div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}

</script>

<style scoped> 
  .header {
    background: #000000;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
  #nav::before {
    content: ""; 
    display: block;
    margin: 10px auto;
    width: 280px;
    border-bottom: 1px solid #e43a15;
    
  }
  .title-content h1 {
      font-family: 'Livvic', sans-serif;
  }
  .title-content h4 {
      font-family: 'IBM Plex Mono', sans-serif;
  }
</style>