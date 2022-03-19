<template>
  <div class="blocos-card">
    <ul>
      <!-- <li v-for="(bloco, index) of getDataFetch" :key="bloco.name">
        <p><strong>Adress: </strong>{{ bloco.adress }}</p>
        <p><strong>Description: </strong>{{ bloco.description }}</p>
        <p><strong>Nome do Evento: </strong>{{ bloco.name }}</p>
        <img :src="bloco.photo" :alt="animal.nome">
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BlocosCard',
  props: {
    getDataFetch: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // variaveis: '',

    }
  },
  methods: {
    // vazio(){}
  },
}
</script>

<style scoped>

</style>