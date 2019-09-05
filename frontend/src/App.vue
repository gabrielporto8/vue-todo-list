<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name:"app"
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Raleway', sans-serif;
    line-height: 1.4;
    background-repeat: no-repeat;
    background: #e43a15;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #e65245, #e43a15);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #e65245, #e43a15); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-attachment: fixed;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #000000;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>
