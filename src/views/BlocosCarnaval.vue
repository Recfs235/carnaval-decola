<template>
  <v-container>
    <v-img
      alt="Bloco logo"
      src="../assets/blocoscarnaval.png"
      class="white--text align-end mb-6"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      max-height=100%
      max-width=100%
      fixed
    >
    </v-img>
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
