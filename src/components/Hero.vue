<template>
    <section class="hero">
      <div class="hero-content">
        <h1>The best cinema software for your business</h1>
        <button>Learn More</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Hero'
  }
  </script>
  
  <style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #f5f5f5;
}

.hero-content {
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>