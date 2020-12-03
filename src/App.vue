<template>
  <v-app>
    <v-app-bar app>
      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src=".\assets\Logo Ingeteam vektor_1.png"
        width="100"
      />
      <v-spacer />
      <h1 class="about">TEST</h1>
      <v-btn text>
        <router-link to="/">Home</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/about">About</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/table">Table</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/graph">Graph</router-link>
      </v-btn>
      <v-btn text>
        <router-link to="/graph2">Graph 2</router-link>
      </v-btn>
      <v-btn text href="http://ingeteam.cz/" target="_blank">
        Ingeteam home page
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>


<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: "App",

  components: {
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
