<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-img        
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src=".\assets\Logo Ingeteam vektor_1.png"
          width="100"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>
          <router-link to="/">Home</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/about">About</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/table">Table</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/graph">Graph</router-link>
        </v-btn>
        <v-btn flat>
          <router-link to="/graph2">Graph 2</router-link>
        </v-btn>
        <v-btn flat
          href="http://ingeteam.cz/"
          target="_blank"
        >
          Ingeteam home page
        </v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>¨
      </v-app>
</template>


<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
