<template>
<h3>Movies</h3>


</template>

<script>

export default {
  name: "Movies",
    components: {

    },
  data() {
    return {
      movies: [],
    };
  },
  methods: {
    fetchRecords() {
      fetch(`http://localhost:3000/api/movies`)
        .then((response) => response.json())
        .then((data) => (this.movies = data))
        .catch((err) => console.log(err.message));
  },
  },
  mounted() {
    this.fetchRecords();
    console.log("mounted");
  } 
};
</script>

<style scoped>

h3 {
  text-align: center;
  color: rgb(8, 110, 110);
}
</style>
