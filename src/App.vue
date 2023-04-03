<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" app>

      <v-subheader class="text-uppercase font-weight-bold">Меню</v-subheader>
    
      <v-list>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    
        <v-list-item link to="/about">
          <v-list-item-icon>
            <v-icon>mdi-information</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>


        <v-list-item link to="/new">
          <v-list-item-icon>
            <v-icon>mdi-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Add new article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
    
        <v-divider></v-divider>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>List of articles about Vue.js</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>

    <v-footer color="primary" dark>
      <v-spacer></v-spacer>
      <v-row align="center">
        <v-col>
          <router-link to="/">
            <v-btn icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-btn>
          </router-link>
        </v-col>

        <v-col>
          <router-link to="/about">
            <v-btn icon>
              <v-icon>mdi-information</v-icon>
            </v-btn>
            </router-link>
          </v-col>

          <v-col>
            <router-link to="/new">
              <v-btn icon>
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              </router-link>
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
        { title: 'Articles', icon: 'mdi-newspaper'},
        { title: 'About', icon: 'mdi-information', route: { name: 'About' } },
        { title: 'Add new article', icon: 'mdi-plus', route: { name: 'NewArticle' } }
      ],
    };
  }
};
</script>

<style scoped>
.v-subheader {
  font-size: 16px;
}
</style>
