<template>
    <section class="contact">
      <h2>Contact Us</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
  
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
  
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
  
        <button type="submit">Send Message</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
    data() {
      return {
        name: '',
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm() {
        // submit form here
        console.log(`Name: ${this.name}, Email: ${this.email}, Message: ${this.message}`);
      }
    }
  }
  </script>
  
  <style scoped>
  .contact {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  label {
    margin-bottom: 10px;
  }
  
  input, textarea {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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