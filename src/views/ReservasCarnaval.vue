<template>
    <div>
 <v-card
    class="d-flex flex-wrap mx-auto" flat tile
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
               <a :href="card.link" target="_blank">
            <v-img
              :src="card.src"
              class="white--text align-end"
              height="100%"
            >
            </v-img>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </v-card>
    </div>
</template>

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'AirBnb', src: 'https://logosmarcas.net/wp-content/uploads/2020/07/Airbnb-Emblema.jpg', flex: 12, link: 'https://www.airbnb.com.br/' },
        { title: 'Booking', src: 'https://logowik.com/content/uploads/images/252_booking_logo.jpg', flex: 12, link: 'https://www.booking.com/index.pt-br.html' },
      ],
    }),
  }
</script>
<style scoped>
    a {
        text-decoration: none;
    }

    a:hover {
        transition: 0.2s opacity;
        opacity: 0.8;
    }
</style>