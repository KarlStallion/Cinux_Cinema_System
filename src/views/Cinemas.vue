<template>
    <div class="cinemas">
      <h2>Our Cinemas</h2>
      <ul>
        <li v-for="cinema in cinemas" :key="cinema.id">
          <h3>{{ cinema.name }}</h3>
          <p>{{ cinema.location }}</p>
          <p>{{ cinema.showtimes }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Cinemas',
    data() {
      return {
        cinemas: [
          {
            id: 1,
            name: 'Cinema 1',
            location: '123 Main St., Anytown USA',
            showtimes: 'Showtimes: 12:00, 3:00, 6:00, 9:00'
          },
          {
            id: 2,
            name: 'Cinema 2',
            location: '456 Elm St., Anytown USA',
            showtimes: 'Showtimes: 12:15, 3:15, 6:15, 9:15'
          },
          {
            id: 3,
            name: 'Cinema 3',
            location: '789 Oak St., Anytown USA',
            showtimes: 'Showtimes: 12:30, 3:30, 6:30, 9:30'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .cinemas {
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
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.5;
  }
  </style>