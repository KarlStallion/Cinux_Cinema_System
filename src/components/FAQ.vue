<template>
    <section class="faq">
      <h2>Frequently Asked Questions</h2>
      <div class="question" v-for="(question, index) in questions" :key="index">
        <h3>{{ question.q }}</h3>
        <p>{{ question.a }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FAQ',
    data() {
      return {
        questions: [
          {
            q: 'What is cinema software?',
            a: 'Cinema software is a tool that helps cinema owners and managers manage their business more efficiently. It can include features like online ticket sales, point-of-sale integration, real-time reporting, inventory management, and customer relationship management.'
          },
          {
            q: 'How does cinema software work?',
            a: 'Cinema software is typically a web-based application that can be accessed from any device with an internet connection. It is designed to be user-friendly and intuitive, with features that are easy to use and understand. Cinema software can be customized to meet the specific needs of each cinema, making it a versatile tool for managing a variety of tasks.'
          },
          {
            q: 'Who can benefit from cinema software?',
            a: 'Cinema software is ideal for cinema owners and managers who want to streamline their operations and improve their customer experience. It can be used by cinemas of all sizes, from small independent theaters to large chains. Cinema software can help cinemas save time and money, while also providing valuable insights into their business operations.'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .faq {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .question {
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