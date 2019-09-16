<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="4">
        <b-input-group>
            <b-input-group-prepend>
              <b-input-group-text><i class="icon-magnifier"></i></b-input-group-text>
            </b-input-group-prepend>
            <b-form-input type="email" placeholder="Search"></b-form-input>
          </b-input-group>
        
      </b-col>
      <b-col lg="12">
        <c-table :table-data="items" :per-page=12 :fields="fields" striped  caption="<i class='icon-people'></i> Office Users"></c-table>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import cTable from "@/views/base/Table.vue";

const users = () => [
  { username: "Gaja", age: 50, gender: "male", status: 'Active' },
  { username: "Ram", age: 60, gender: "male" },
  { username: "Bawani", age: 25, gender: "female" },
  { username: "Ranjana", age: 30, gender: "female" },
  { username: "Gaja", age: 50, gender: "male", status: 'Active' },
  { username: "Ram", age: 60, gender: "male" },
  { username: "Bawani", age: 25, gender: "female" },
  { username: "Ranjana", age: 30, gender: "female" },
  { username: "Gaja", age: 50, gender: "male", status: 'Active' },
  { username: "Ram", age: 60, gender: "male" },
  { username: "Bawani", age: 25, gender: "female" },
  { username: "Ranjana", age: 30, gender: "female" },
  { username: "Gaja", age: 50, gender: "male", status: 'Active' },
  { username: "Ram", age: 60, gender: "male" },
  { username: "Bawani", age: 25, gender: "female" },
  { username: "Ranjana", age: 30, gender: "female" }
  ];

export default {
  data() {
    return {
      items: users,
      fields: [
        { key: "username", label: "Username", sortable: true },
        { key: "age", sortable: true },
        { key: "gender"},
        { key: "status"},
        { key: "delete"}
      ]
    };
  },
  components: { cTable }
};
</script>
<style>
</style>

