<template>
  <div>
    <h1 class="vermelho" :class="classe" >Bem vindo {{variavel}}</h1>
    <p>Link da API {{url_api}}</p>
    <p>Modo: {{modo}}</p>
    <p>Token: {{token}}</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      // Usando esse processo de process.env. para ir buscar as informações que estão no arquivo .env
      variavel: process.env.VUE_APP_MINHA_VARIAVEL_DE_AMBIENTE,
      url_api: process.env.VUE_APP_API_URL,
      modo: process.env.VUE_APP_MODO,
      token: process.env.VUE_APP_TOKEN,
      classe: 'fundoverde'
    }
  },
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vermelho {
  color: red
}
.fundoverde{
  background-color: green;
}
</style>
