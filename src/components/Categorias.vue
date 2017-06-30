<template>
  <div class="container">
    <h3>Categorias</h3>
    <ul>
      <li v-for="categoria in categorias">
        {{categoria.descricao}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        categorias: ''
      }
    },
    mounted () {
      this.$http.get('http://127.0.0.1:8000/api/subtemas/1').then(response => {
        this.categorias = response.body
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
