<script setup>
import Home from '@/components/Home.vue'
</script>

<template>
  <v-app id="inspire" permanent>
    <v-navigation-drawer v-model="drawer"  >
      <v-app-bar-title>
      le
      </v-app-bar-title>
    </v-navigation-drawer>

    <v-app-bar :elevation="1">
      <v-app-bar-nav-icon @click="drawer = !drawer" ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.params.id }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <Home/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ 
    drawer: false,  
  
  }),
}
</script>