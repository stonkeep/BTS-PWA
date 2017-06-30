<template>
  <div class="container">
    <h2>Tecnologias</h2>
    <ul>
      <li v-for="tecnologia in tecnologias">
        {{tecnologia.titulo}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        tecnologias: ''
      }
    },
    mounted () {
      this.$http.get('http://127.0.0.1:8000/api/tecnologias/').then(response => {
        this.tecnologias = response.body.data
        console.log(response.body.data)
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
