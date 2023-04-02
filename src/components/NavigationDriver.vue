<template>
    <v-app>
      <v-navigation-drawer app>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-list-item v-on="on">
              <v-list-item-title>Menu</v-list-item-title>
            </v-list-item>
          </template>
  
          <v-list>
            <v-list-item v-for="item in items" :key="item.title">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
  
        <!-- Your other components here -->
      </v-navigation-drawer>
  
      <v-main>
        <!-- Your main content here -->
      </v-main>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { title: 'articles' },
          { title: 'about' },
          { title: 'grid' },
          { title: 'some components' },
        ],
      };
    },
  };
  </script>