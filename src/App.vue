<template>
  <v-app>
    <AppTopBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppTopBar from './components/AppTopBar'

export default {
  name: 'App',
  components: {
    AppTopBar
  }
};
</script>

<style>

</style>
