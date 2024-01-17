<template>
  <div>
    <nav>
      <router-link to="/Movies"> Movies</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #8f98a1;
}
nav a.router-link-exact-active { 
  color: #8cd4b4;
}
button{
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  padding: 10px 16px;
  letter-spacing: 2px;
}
</style>
