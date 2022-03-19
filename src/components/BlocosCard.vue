<template>
  <div class="blocos-card">
    <v-container>
      <h1 class="text-h2 mb-0">Teste</h1>
    </v-container>
    <v-card
      class="mx-auto"
      max-width="500"
    >
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="bloco in getDataFetch"
            :key="bloco.adress"
            :cols="bloco.flex"
          >
            <v-card>
              <v-img
                :src="bloco.photo"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="200px"
              >
                <v-card-title v-text="bloco.name"></v-card-title>
              </v-img>

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