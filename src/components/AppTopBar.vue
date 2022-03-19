<template>
<div class="appTopBar">
        <v-app-bar app dark class="navbar">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer class="text-center">
      <v-toolbar-title>
        Carnaval Decola 🎉
      </v-toolbar-title>
        </v-spacer>
        
         <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs"  small fab @click="modoDark">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>ON</span>
      </v-tooltip>
       <v-tooltip v-else bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-on="on" v-bind="attrs" small fab @click="modoDark">
            <v-icon>mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>OFF</span>
      </v-tooltip>  

    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="orange--text text--lighten-2">
        <router-link to='/'>
            <v-list-item>
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-title>
                Home
                </v-list-item-title>
            </v-list-item>
        </router-link>
        <router-link to='/blocos'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-drama-masks</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Blocos
            </v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to='/noticias'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Notícias
            </v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to='/Lives'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-video</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Lives
            </v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to='/reservas'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-bed</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Reservas
            </v-list-item-title>
          </v-list-item>
        </router-link>
          <router-link to='/compraradaba'>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-party-popper</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              Comprar Abadá
            </v-list-item-title>
          </v-list-item>
        </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
        drawer: false,
        group: null
    }),
    methods: {
    modoDark() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
}
</script>

<style scoped>
    .appTopBar a{
        text-decoration: none;
    }

    .navbar {
      background-color: #F08A5D !important;
    }
</style>