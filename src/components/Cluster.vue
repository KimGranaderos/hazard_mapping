<template>
  <v-container id="dropdown-example">
    <v-layout justify-space-around row>
      <v-flex sm8 mr-5>
        <v-card>
            <v-card-title>
              Reports Database History
              <v-spacer></v-spacer>
              <!-- <v-overflow-btn
               :items="month"
               label="Month"
               target="#dropdown-example"
               pa-2
             ></v-overflow-btn> -->
              <v-text-field
                v-model="search"
                append-icon="search"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
          <v-data-table
            :headers="headers"
            :items="reports"
            :search="search"
            v-model="selected"
            hide-actions
            item-key="id"
            select-all
            class="elevation-1"
          >
            <template slot="items" slot-scope="props">
                <td>
                  <v-checkbox
                    v-model="props.selected"
                    hide-details
                  ></v-checkbox>
                </td>
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.type }}</td>
                <td>{{ props.item.location }}</td>
                <td>{{ props.item.reporter }}</td>
                <td>{{ props.item.time }}</td>
                <td>{{ props.item.date }}</td>
                <td>{{ props.item.status }}</td>
                <td>{{ props.item.date_verified }}</td>
            </template>
            <template slot="no-data">
              <v-alert :value="true" color="error" icon="warning">
                Sorry, nothing to display here :(
              </v-alert>
            </template>
            <v-alert slot="no-results" :value="true" color="error" icon="warning">
              Your search for "{{ search }}" found no results.
            </v-alert>
          </v-data-table>
        </v-card>
        <v-flex mt-3>
          <v-btn color="red" dark ripple>Cluster</v-btn>
        </v-flex>
      </v-flex>
      <v-flex xs12 sm6>
        <img src='/static/mapverified.png' width="100%"/>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
  export default {
    data: () => {
      return {
        month: [
          'Jan', 'Feb', 'Mar',
          'Gimay', 'May', 'Jun',
          'Jul', 'Aug', 'Sep',
          'Oct', 'Nov', 'Dec'
        ],
        search: '',
        selected: [],
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'id'
          },
          {
            text: 'Report Type',
            align: 'left',
            sortable: true,
            value: 'type'
          },
          {
            text: 'Report Location',
            align: 'left',
            sortable: true,
            value: 'location'
          },
          {
            text: 'Reporter',
            align: 'left',
            sortable: false,
            value: 'reporter'
          },
          {
            text: 'Time',
            align: 'left',
            sortable: false,
            value: 'time'
          },
          {
            text: 'Date',
            align: 'left',
            sortable: false,
            value: 'date'
          },
          {
            text: 'Status',
            align: 'left',
            sortable: true,
            value: 'status'
          },
          {
            text: 'Date Verified',
            align: 'left',
            sortable: false,
            value: 'date_verified'
          }
        ],
        reports: [
          {
            id: '1',
            type: 'Fire',
            location: 'Sardonyx St.',
            reporter: 'Jotaro Kujo',
            time: '0010hrs',
            date: 'Jan-22-2011',
            status: 'verified',
            date_verified: 'Jan-22-2011',
            description: 'Description: Report Remarks2',
            description_tanod: 'Description by Tanod: New Remarks1'
          },
          {
            id: '2',
            type: 'Fire',
            location: 'Reta Ave',
            reporter: 'Josuke Higashikata',
            time: '0010hrs',
            date: 'Feb-21-2011',
            status: 'verified',
            date_verified: 'Feb-21-2011',
            description: 'Description: Report Remarks4',
            description_tanod: 'Description by Tanod: New Remarks2'
          },
          {
            id: '3',
            type: 'Flood',
            location: 'Sardonyx St',
            reporter: 'Dio Brando',
            time: '0000hrs',
            date: 'Feb-11-2012',
            status: 'verified',
            date_verified: 'Feb-16-2012',
            description: 'Description: Report Remarks5',
            description_tanod: 'Description by Tanod: New Remarks3'
          },
          {
            id: '4',
            type: 'Fire',
            location: 'Sardonyx St',
            reporter: 'Giorno Giovanna',
            time: '0030hrs',
            date: 'Feb-21-2012',
            status: 'verified',
            date_verified: 'Feb-21-2012',
            description: 'Description: Report Remarks7',
            description_tanod: 'Description by Tanod: New Remarks4'
          }
        ]
      }
    }
  }
</script>
