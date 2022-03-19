<template>
  <v-container>
      <h2 class="text-h5 text-center mb-3 mt-5">
        Blocos - Teste
      </h2>
      <BlocosCard :getDataFetch="blocosLista"/>
    </v-container>
</template>

<script>
import BlocosCard from '../components/BlocosCard';

export default {
  name: 'BlocosCarnaval',
  components: {
    BlocosCard
  },
  data() {
    return {
      blocosLista: []
    }
  },
  created() {
    fetch('https://it3-hbn-default-rtdb.firebaseio.com/carnaval.json')
      .then(response => response.json())
      .then(json => {
        this.blocosLista = json;
        console.log(this.blocosLista)
      })
  }
}
</script>

<style scoped>
</style>
