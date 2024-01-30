<template>
    <div class="about">
      <h2>About Us</h2>
      <p>{{ aboutText }}</p>
      <p>{{ companyName }}</p>
      <p>{{ companyAddress }}</p>
      <p>{{ companyPhone }}</p>
      <p>{{ companyEmail }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
    data() {
      return {
        aboutText: 'Our cinema software is the best choice for managing your cinema. With our easy-to-use interface and powerful features, you can streamline your operations and provide a better experience for your customers.',
        companyName: 'XYZ Cinemas',
        companyAddress: '123 Main St.\nAnytown, USA 12345',
        companyPhone: '(123) 456-7890',
        companyEmail: 'info@xyzcinemas.com'
      }
    }
  }
  </script>
  
  <style scoped>
  .about {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
  </style>