<template>
  <v-container id="dropdown-example">
    <v-layout justify-center>
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
          hide-actions
          item-key="id"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.type }}</td>
              <td>{{ props.item.location }}</td>
              <td>{{ props.item.reporter }}</td>
              <td>{{ props.item.time }}</td>
              <td>{{ props.item.date }}</td>
              <td>{{ props.item.status }}</td>
              <td>{{ props.item.date_verified }}</td>
           </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-text>{{ props.item.description }}</v-card-text>
              <v-card-text>{{ props.item.description_tanod }}</v-card-text>
            </v-card>
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
    </v-layout>
    
    <v-layout justify-center mt-5>
      <img src='/static/mapverified.png'/>
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
            id: '2',
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
            id: '4',
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
            id: '5',
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
            id: '7',
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
