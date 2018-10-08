<template>
  <v-container>
    <v-layout justify-center>
      <v-card>
        <v-card-title>
          Reports Database History
          <v-spacer></v-spacer>
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
           </tr>
          </template>
          <template slot="expand" slot-scope="props">
            <v-card flat>
              <v-card-text>{{ props.item.description }}</v-card-text>
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
    data () {
      return {
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
            sortable: false,
            value: 'type'
          },
          { text: 'Report Location',
            align: 'left',
            sortable: false,
            value: 'location'
          },
          { text: 'Reporter',
            align: 'left',
            sortable: false,
            value: 'reporter'
          },
          { text: 'Time',
            align: 'left',
            sortable: false,
            value: 'time'
          },
          { text: 'Date',
            align: 'left',
            sortable: false,
            value: 'date'
          },
          { text: 'Status',
            align: 'left',
            sortable: true,
            value: 'status'
          }
        ],
        reports: [
          {
            id: '1',
            type: 'Flood',
            location: 'Area-11',
            reporter: 'Gimay',
            time: '0000hrs',
            date: '01-01-2011',
            status: 'unverified',
            description: 'Okok6'
          },
          {
            id: '2',
            type: 'Fire',
            location: 'Area-12',
            reporter: 'Gamay',
            time: '0010hrs',
            date: '21-02-2011',
            status: 'verified',
            description: 'Okok5'
          },
          {
            id: '3',
            type: 'Flood',
            location: 'Area-11',
            reporter: 'Gimay',
            time: '0000hrs',
            date: '01-01-2011',
            status: 'unverified',
            description: 'Okok4'
          },
          {
            id: '4',
            type: 'Fire',
            location: 'Area-12',
            reporter: 'Gamay',
            time: '0010hrs',
            date: '21-02-2011',
            status: 'verified',
            description: 'Okok3'
          },
          {
            id: '5',
            type: 'Flood',
            location: 'Area-11',
            reporter: 'Gimay',
            time: '0000hrs',
            date: '01-01-2011',
            status: 'verified',
            description: 'Okok2'
          },
          {
            id: '6',
            type: 'Fire',
            location: 'Area-12',
            reporter: 'Gamay',
            time: '0010hrs',
            date: '21-02-2011',
            status: 'unverified',
            description: 'Okok1'
          }
        ]
      }
    }
  }
</script>
