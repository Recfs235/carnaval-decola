<template>
  <div class="blocos-card">
    <v-card
      class="d-flex flex-wrap mx-auto"
      flat
      tile
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="bloco in getDataFetch"
            :key="bloco.adress"
          >
            <v-card
            >
              <v-row
                justify="center"
              >
                <v-menu transition="scroll-y-transition">
                  <template v-slot:activator="{ on, attrs }">
                    <v-img
                      :src="bloco.photo"
                      class="white--text align-end"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="200px"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-card-title v-text="bloco.name"></v-card-title>
                    </v-img>
                  </template>
                  <v-list
                    class="orange v-card--reveal text-h6 white--text"
                    max-height=100%
                  >
                      <h2>{{ bloco.address }}</h2>
                      <br>
                      <p><strong>Descrição do evento: </strong>{{ bloco.description }}></p>
                  </v-list>
                </v-menu>
              </v-row>
              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-calendar-month-outline</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
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
  }
}
</script>

<style scoped>
</style>