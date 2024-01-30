<template>
    <div class="home">
      <h1>Welcome to Our Cinema!</h1>
      <p>Here you can find the latest movies and showtimes, as well as information about our cinemas and pricing.</p>
      <button>Buy Tickets</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  }
  </script>
  
  <style scoped>
  .home {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 30px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 30px;
  }
  
  button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>