<script setup>
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>
        <router-link to="/">
          Home
        </router-link>
      </h1>
      
      <h1>
        <router-link to="/calc1">
          Calculator
        </router-link>
      </h1>
    </header>

    <router-view></router-view>
  </div>
</template>

<style scoped>
  .app {
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: rgb(186, 246, 248);
  }

  .header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 80px;
    background-color: rgb(143, 217, 219);
    border-bottom: 5px rgb(114, 175, 177) solid;
  }
</style>
