<template>
  <v-layout align-center justify-center column mt-5 pr-5>
    <v-layout align-start justify-center row>
      <v-flex xs12 sm6 d-flex mr-5>
         <v-select
           :items="month"
           label="Month"
           solo
         ></v-select>
       </v-flex>
       <v-flex xs12 sm6>
          <v-select
            :items="i_type"
            label="Incident Type"
            solo
          ></v-select>
        </v-flex>
    </v-layout>
    <v-flex xs12 sm6>
      <v-card width="1080px" height="560px">
       <v-img src="/static/mapniapril.png" width="1080px" height="560px"/>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      month: [
        'Jan', 'Feb', 'Mar',
        'Gimay', 'May', 'Jun',
        'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
      ],
      i_type: ['Flood', 'Storm', 'Fire']
    })
  }
</script>
