<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list>
        <v-list-tile
          v-for="item in items"
          :key="item.text"
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.text }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="blue darken-3"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span class="hidden-sm-and-down"></span>
        Disaster DSS prototype
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu
        transition="slide-x-transition"
        :nudge-width="200"
        bottom
        left
      >
        <v-btn slot="activator"  icon>
          <v-badge
            overlap
            color="red"
          >
            <span
             slot="badge"
             small
            >2</span>
            <v-icon>notification_important</v-icon>
          </v-badge>
        </v-btn>
        <v-card>
            <v-list>
              <v-list-title><p class="text-xs-center"><b>Quick Respond</b></p></v-list-title>
              <v-divider></v-divider>
              <v-list-tile avatar>
                <v-list-tile-avatar color="teal">
                  <v-icon dark>pool</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Flood] Area-12</v-list-tile-title>
                  <v-list-tile-sub-title>Gamay 12:00nn Jan/21/2011</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile avatar>
                <v-list-tile-avatar color="blue-grey">
                  <v-icon dark>beach_access</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Storm] Area-11</v-list-tile-title>
                  <v-list-tile-sub-title>Gimay 10:00am Jan/21/2011</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile avatar>
                <v-list-tile-avatar color="red">
                  <v-icon dark>whatshot</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Fire] Area-11</v-list-tile-title>
                  <v-list-tile-sub-title>Dako 10:00am Nov/01/2010</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
        </v-card>
      </v-menu>
      <v-menu
        transition="slide-x-transition"
        :nudge-width="200"
        bottom
        left
      >
        <v-btn slot="activator"  icon>
          <v-badge
            overlap
            color="red"
          >
            <span
             slot="badge"
             small
            >2</span>
            <v-icon>event_note</v-icon>
          </v-badge>
        </v-btn>
        <v-card>
          <v-list>
            <v-list-title><p class="text-xs-center"><b>Brgy. Tanod Tasks</b></p></v-list-title>
            <v-divider></v-divider>

          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
    <main>
      <v-content>
        <router-view/>
      </v-content>
    </main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      items: [
        { icon: 'dashboard', text: 'Home', link: '/' },
        {
          icon: 'scatter_plot',
          text: 'Clustering Reports',
          link: '/clustering-reports'
        },
        {
          icon: 'group_work',
          text: 'Organize and Dispatch',
          link: '/organize-and-dispatch'
        },
        {
          icon: 'memory',
          text: 'DSS',
          link: '/decision-support-system'
        },
        {
          icon: 'terrain',
          text: 'Hazard Mapping',
          link: '/hazard-mapping'
        }
      ]
    }),
    props: {
      source: String
    }
  }
</script>
