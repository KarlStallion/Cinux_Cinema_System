<template>
    <div class="pricing">
      <h2>Pricing Plans</h2>
      <div class="plan" v-for="(plan, index) in plans" :key="index">
        <h3>{{ plan.name }}</h3>
        <p>{{ plan.description }}</p>
        <p>{{ plan.price }}</p>
        <button>Sign Up</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pricing',
    data() {
      return {
        plans: [
          {
            name: 'Basic',
            description: 'Includes basic features for small cinemas.',
            price: '$99/month'
          },
          {
            name: 'Pro',
            description: 'Includes advanced features for medium-sized cinemas.',
            price: '$199/month'
          },
          {
            name: 'Premium',
            description: 'Includes all features for large cinemas.',
            price: '$299/month'
          }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .pricing {
    background-color: #f5f5f5;
    padding: 50px;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }
  
  .plan {
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
  
  button {
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>