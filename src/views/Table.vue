<template>
    <div id="app">
        <v-app id="inspire">
            <div>
            <v-data-table
                :headers="headers"
                :items="personList"
                item-key="name"
                class="elevation-1"
                :search="search"
                :custom-filter="filterOnlyCapsText"
            >
                <template v-slot:top>
                    <tr>
                      <td>
                        <v-text-field
                            v-model="firstName"
                            label="First name"
                            class="mx-4"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                            v-model="lastName"
                            label="Last name"
                            class="mx-4"
                        ></v-text-field>
                      </td>
                      <td>
                        <v-text-field
                            v-model="year"
                            label="Year"
                            class="mx-4"
                        ></v-text-field>
                      </td>
                      <td colspan="4"></td>
                  </tr>
                </template>
                <!-- <template v-slot:body.append>
                <tr>
                    <td></td>
                    <td>
                    <v-text-field
                        v-model="calories"
                        type="number"
                        label="Less than"
                    ></v-text-field>
                    </td>
                    <td colspan="4"></td>
                </tr>
                </template> -->
            </v-data-table>
            </div>
        </v-app>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        lastName: '',
        firstName: '',
        year: '',
        personList: [
          {
            lastName: 'Novák',
            firstName: 'Josef',
            year: 1980
          },
          {
            lastName: 'Novotný',
            firstName: 'Petr',
            year: 1969
          },
          {
            lastName: 'Kroupa',
            firstName: 'Ignác',
            year: 1980
          },
          {
            lastName: 'Džugašvili',
            firstName: 'Soso',
            year: 1895
          },
        ],
      }
    },
    computed: {
      headers () {
        return [
          {
            text: 'First name',
            align: 'start',
            sortable: false,
            value: 'firstName',
            filter: value => {
              if (!this.firstName) 
                return true
              return value.toString().toLocaleUpperCase().indexOf(this.firstName.toLocaleUpperCase()) !== -1
            },
          },
          {
            text: 'Last name',
            align: 'start',
            sortable: false,
            value: 'lastName',
            filter: value => {
              if (!this.lastName) 
                return true
              return value.toString().toLocaleUpperCase().indexOf(this.lastName.toLocaleUpperCase()) !== -1
            },
          },
          {
            text: 'Year',
            value: 'year',
            filter: value => {
              if (!this.year) return true
              return value === parseInt(this.year)
            },
          },
        ]
      },
    },
    methods: {
    },
  }
</script>

<style>

</style>