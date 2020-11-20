<template>
  <div>
      <v-card
        class="mx-auto text-center"
        color="red"
        dark
        max-width="1000"
    >
      <v-card-text>
        <div class="display-1 font-weight-thick">
          Plat
        </div>
      </v-card-text>

      <v-card-text>
        <v-sheet color="rgba(0, 0, 0, .12)">
          <v-sparkline
            :value="valueList"
            color="rgba(255, 255, 255, .7)"
            height="100"
            padding="24"
            stroke-linecap="round"
            smooth
            val
            :labels="labelList"
          >
            <template v-slot:label="item">
              <!-- {{ item.value.split("\n").join("<br />") }}  -->
              *{{item.value}}*
            </template>
          </v-sparkline>
        </v-sheet>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions class="justify-center">
        
        <v-btn
          block
          text
        >
          <router-link to="/table">Go to table</router-link>        
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        search: '',
        lastName: '',
        firstName: '',
        year: '',
        labelList: [
          'Novák Josef',
          'Novotný Petr',
          'Kroupa Ignác',
          'Džugašvili Soso'
        ],
        valueList: [
          25000,
          30000,
          40000,
          50000,
        ],
        personList: [
          {
            lastName: 'Novák',
            firstName: 'Josef',
            year: 1980,
            sallary: 25000
          },
          {
            lastName: 'Novotný',
            firstName: 'Petr',
            year: 1969,
            sallary: 30000
          },
          {
            lastName: 'Kroupa',
            firstName: 'Ignác',
            year: 1980,
            sallary: 40000
          },
          {
            lastName: 'Džugašvili',
            firstName: 'Soso',
            year: 1895,
            sallary: 50000
          },
        ],
      }
    },
  
    methods: {
    },
  }
  </script>

<style>

</style>
