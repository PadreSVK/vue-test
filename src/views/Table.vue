<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="personList2"
      item-key="name"
      class="elevation-1"
      :search="search"
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
      <!-- <template v-slot:item="{ item }"> -->
      <!-- template slot="item" slot-scope="props" -->
      <template v-slot:item="{ item }">
        <tr>
          <td v-bind:class="{ admin: item.isAdmin }">
            {{ item.firstName }}
            {{ item.isAdmin }}
          </td>
          <td>{{ item.lastName }}</td>
          <td>{{ item.year }}</td>
          <td>
            <v-btn @click="makeAdmin(item.id)">MakeAdmin</v-btn>
          </td>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      lastName: "",
      firstName: "",
      year: "",
      personList: [
        {
          id: 0,
          lastName: "Novák",
          firstName: "Josef",
          year: 1980,
          isAdmin: true,
        },
        {
          id: 1,
          lastName: "Novotný",
          firstName: "Petr",
          year: 1969,
          isAdmin: false,
        },
        {
          id: 2,
          lastName: "Kroupa",
          firstName: "Ignác",
          year: 1980,
          isAdmin: false,
        },
        {
          id: 3,
          lastName: "Džugašvili",
          firstName: "Soso",
          year: 1895,
          isAdmin: false,
        },
      ],
    };
  },
  computed: {
    headers() {
      return [
        {
          text: "First name",
          align: "start",
          sortable: false,
          value: "firstName",
          filter: (value) => {
            if (!this.firstName) return true;
            return (
              value
                .toString()
                .toLocaleUpperCase()
                .indexOf(this.firstName.toLocaleUpperCase()) !== -1
            );
          },
        },
        {
          text: "Last name",
          align: "start",
          sortable: false,
          value: "lastName",
          filter: (value) => {
            if (!this.lastName) return true;
            return (
              value
                .toString()
                .toLocaleUpperCase()
                .indexOf(this.lastName.toLocaleUpperCase()) !== -1
            );
          },
        },
        {
          text: "Year",
          value: "year",
          filter: (value) => {
            if (!this.year) return true;
            return value === parseInt(this.year);
          },
        },
        { sortable: false },
      ];
    },
    personList2() {
      return this.personList;
    },
  },
  methods: {
    makeAdmin(id) {
      const person = this.personList.find((i) => i.id == id);
      person.isAdmin = true;
      //   this.personList = personList.map(i => i);
    },
  },
};
</script>

<style scoped>
.admin {
  background-color: green;
}
</style>