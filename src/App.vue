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
      <!-- <v-container>
        <v-carousel>
          <v-carousel-item v-for="(article, index) in articles" :key="index">
            <v-card>
              <v-img
                src="https://blog.skillfactory.ru/wp-content/uploads/2023/02/logo-vuejs-9686556.png">
                height: "100px" 
                width: "100px"
              </v-img> 
              <v-card-title>{{ article.title }}</v-card-title>
              <v-card-subtitle>{{ article.author }}</v-card-subtitle>
              <v-card-actions>
                <v-btn @click="article.published = !article.published">
                  {{ article.published ? "Unpublished" : "" }}
                </v-btn>
                <v-btn @click="showDialog(index)">Редактировать</v-btn>
              </v-card-actions>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-container>   -->
      <!-- <v-card>
        <v-card-title>Заголовок</v-card-title>
    
        <v-card-text>
          Текст карточки
        </v-card-text>
    
        <v-card-actions>
          <v-btn color="primary">Действие 1</v-btn>
          <v-btn color="secondary">Действие 2</v-btn>
        </v-card-actions>
      </v-card> -->
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
        { title: 'Articles', icon: 'mdi-newspaper', route: { name: 'Home' } },
        { title: 'About', icon: 'mdi-information', route: { name: 'About' } }
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
