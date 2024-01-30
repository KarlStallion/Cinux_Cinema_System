<template>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/showings">Showings</router-link></li>
        <li><router-link to="/cinemas">Cinemas</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    justify-content: space-between;
  }
  
  li a {
    color: #fff;
    text-decoration: none;
  }
  </style>