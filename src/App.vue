<template>
  <v-app>

 <v-navigation-drawer app> 

      <v-divider></v-divider>
      <v-list>
        <v-subheader class="text-uppercase font-weight-bold">Меню</v-subheader>

        <v-list-item v-for="(item, i) in items" :key="i" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>


    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>List of articles about Vue.js</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-card>
        <v-card-title>Заголовок</v-card-title>
    
        <v-card-text>
          Текст карточки
        </v-card-text>
    
        <v-card-actions>
          <v-btn color="primary">Действие 1</v-btn>
          <v-btn color="secondary">Действие 2</v-btn>
        </v-card-actions>
      </v-card>
      <router-view/>

      <v-container>
        <h1>Main Content</h1>
      </v-container>
    </v-main>

    <v-footer color="primary" dark>
      <v-spacer></v-spacer>
      <v-row align="center">
        <v-col>
          <v-btn icon>
          <v-icon>mdi-newspaper</v-icon>
      </v-btn>
        </v-col>
        <v-col>
          <v-btn icon>
            <v-icon>mdi-information</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Articles', icon: 'mdi-newspaper' },
        { title: 'About', icon: 'mdi-information' },
      ],
    };
  },
  name:"MyFooter",
};
</script>

<style scoped>
.v-subheader {
  font-size: 16px;
}
</style>
