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
          class="elevation-1"
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
            type: 'Flood',
            location: 'Area-11b (y)',
            reporter: 'Gamay',
            time: '1200hrs',
            date: 'Feb-21-2012',
            status: 'verified',
            date_verified: 'Feb-21-2012',
            description: 'Description: Report Remarks7',
            description_tanod: 'Description by Tanod: New Remarks4'
          },
          {
            id: '2',
            type: 'Storm',
            location: 'Area-11b (x)',
            reporter: 'Gimay',
            time: '1145hrs',
            date: 'Feb-21-2012',
            status: 'verified',
            date_verified: 'Feb-21-2012',
            description: 'Description: Report Remarks5',
            description_tanod: 'Description by Tanod: New Remarks3'
          },
          {
            id: '3',
            type: 'Fire',
            location: 'Area-13b (y)',
            reporter: 'Dako',
            time: '1000hrs',
            date: 'Feb-11-2012',
            status: 'unverified',
            date_verified: 'NULL',
            description: 'Description: Report Remarks6',
            description_tanod: 'Description by Tanod: Yet to be verify'
          },
          {
            id: '4',
            type: 'Fire',
            location: 'Area-12a (x)',
            reporter: 'Gamay',
            time: '2010hrs',
            date: 'Mar-21-2011',
            status: 'verified',
            date_verified: 'Feb-21-2011',
            description: 'Description: Report Remarks4',
            description_tanod: 'Description by Tanod: New Remarks2'
          },
          {
            id: '5',
            type: 'Flood',
            location: 'Area-11a (z)',
            reporter: 'Gimay',
            time: '1300hrs',
            date: 'Feb-12-2011',
            status: 'unverified',
            date_verified: 'NULL',
            description: 'Description: Report Remarks1',
            description_tanod: 'Description by Tanod: Yet to be verify'
          },
          {
            id: '6',
            type: 'Fire',
            location: 'Area-12a (z)',
            reporter: 'Gamay',
            time: '1800hrs',
            date: 'Jan-22-2011',
            status: 'verified',
            date_verified: 'Jan-22-2011',
            description: 'Description: Report Remarks2',
            description_tanod: 'Description by Tanod: New Remarks1'
          },
          {
            id: '7',
            type: 'Flood',
            location: 'Area-12b (z)',
            reporter: 'Gimay',
            time: '1400hrs',
            date: 'Jan-11-2011',
            status: 'unverified',
            date_verified: 'NULL',
            description: 'Description: Report Remarks3',
            description_tanod: 'Description by Tanod: Yet to be verify'
          }
        ]
      }
    }
  }
</script>
