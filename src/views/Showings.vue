<template>
    <div class="showing">
      <h2>Showing Times</h2>
      <ul>
        <li v-for="showing in showings" :key="showing.time">
          <p>{{ showing.movie }}</p>
          <p>{{ showing.time }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Showing',
    data() {
      return {
        showings: [
          { movie: 'Movie 1', time: '12:00' },
          { movie: 'Movie 2', time: '1:00' },
          { movie: 'Movie 3', time: '2:00' },
          { movie: 'Movie 4', time: '3:00' },
          { movie: 'Movie 5', time: '4:00' },
          { movie: 'Movie 6', time: '5:00' },
          { movie: 'Movie 7', time: '6:00' },
          { movie: 'Movie 8', time: '7:00' },
          { movie: 'Movie 9', time: '8:00' },
          { movie: 'Movie 10', time: '9:00' },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .showing {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 30px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.5;
  }
  </style>