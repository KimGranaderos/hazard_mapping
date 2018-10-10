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
            >3</span>
            <v-icon>notification_important</v-icon>
          </v-badge>
        </v-btn>
        <v-card>
          <v-list>
            <v-list-title><p class="text-xs-center"><b>Quick Respond</b></p></v-list-title>
            <v-divider></v-divider>
              <v-list-tile @click="dialog = !dialog" avatar>
                <v-list-tile-avatar color="teal">
                  <v-icon dark>pool</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Flood] Area-11b (y)</v-list-tile-title>
                  <v-list-tile-sub-title>Gamay 12:00nn Feb/21/2012</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile @click="" avatar>
                <v-list-tile-avatar color="blue-grey">
                  <v-icon dark>beach_access</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Storm] Area-11b (x)</v-list-tile-title>
                  <v-list-tile-sub-title>Gimay 11:45am Feb/21/2012</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider></v-divider>
              <v-list-tile @click="" avatar>
                <v-list-tile-avatar color="red">
                  <v-icon dark>whatshot</v-icon>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>[Fire] Area-13b (y)</v-list-tile-title>
                  <v-list-tile-sub-title>Dako 10:00am Feb/11/2012</v-list-tile-sub-title>
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
            <v-list-tile two-line avatar>
              <v-list-tile-avatar color="blue-grey">
                <v-icon dark>explore</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Tanod Damiel verifying Area-11b (y) </v-list-tile-title>
                <v-list-tile-sub-title>Flood Quick Respond</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon color="blue-grey">
                  check_circle
                </v-icon>
                <v-list-tile-action-text>
                  10mins ago
                </v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
            <v-list-tile avatar>
              <v-list-tile-avatar color="blue-grey">
                <v-icon dark>explore</v-icon>
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Tanod Maquiling verifying Area-11b (x) </v-list-tile-title>
                <v-list-tile-sub-title>Storm Quick Respond</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-icon color="blue">
                  check_circle
                </v-icon>
                <v-list-tile-action-text>
                  25mins ago
                </v-list-tile-action-text>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-menu>
      <v-dialog v-model="dialog" width="600px">
        <v-card>
          <v-layout align-center justify-center row fill-height/>
            <v-flex>
              <v-img
                src="/static/dialogpic.png"
                width="100%"
              >
              </v-img>
            </v-flex>
          </v-layout>
          <v-container class="pa-4">
            <v-list-tile two-line>
              <v-list-tile-content class="mr-5">
                <v-list-tile-title>FLOOD</v-list-tile-title>
                <v-list-tile-title>Area-11b (y)</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-content class="ml-5">
                <v-list-tile-title>Gamay</v-list-tile-title>
                <v-list-tile-sub-title>Feb-21-2012</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-container>
          <v-card-actions>
          <v-spacer></v-spacer>
          <p>Quick Respond Team</p>
          <v-btn color="red" flat @click="dialog = false">Send</v-btn>
        </v-card-actions>
          </v-card>
      </v-dialog>
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
      dialog: false,
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
