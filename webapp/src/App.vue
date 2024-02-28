<template>
<div id="app">
  <v-app >
    <v-app-bar
      color="primary"
      dark
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title >Eloca</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>
              <router-link  class="dropdown-item" to="/empresa" tabindex="0">Empresa</router-link>
            </v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>
              <router-link  class="dropdown-item" to="/cliente" tabindex="1">Cliente</router-link>
            </v-list-item-title>
          </v-list-item>
          

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
    <v-container fluid>   
			<router-view class="page"></router-view>
    </v-container>
    </v-main>
</v-app>
</div>
</template>
<script>


export default {
  name: 'Home',
   data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
}
</script>