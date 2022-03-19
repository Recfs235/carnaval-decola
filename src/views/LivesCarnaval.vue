<template>

 <v-card
    class="mx-auto"
    max-width="500"
  >
  
  
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
        
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-card-subtitle v-text="card.sub"></v-card-subtitle> 
               <v-spacer></v-spacer>
               

              <v-btn v-on:click="play" icon>
                <v-icon>mdi-heart</v-icon>
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
  
</template>

<script>
export default {
    data: () => ({
      cards: [
        { title: 'Live Ivete Sangalo', sub:'Veveta vai ferver na Live!' , src: 'https://static.glamurama.uol.com.br/2019/05/GettyImages-463478460.jpg', flex: 12 },
        { title: 'Chiclete com Banana', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12 },
      ],
    }),
    // methods:{
    //     play(){
    //         this.

    //     }
    // }


}
</script>


<style scoped>

</style>