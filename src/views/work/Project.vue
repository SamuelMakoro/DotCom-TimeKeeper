<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" md="6">
        <b-card>
          <div slot="header">
            <strong>Add New Project</strong>
            <b-row></b-row>
            <small> Enter Details of New Project</small>
          </div>
          <b-row>
            <b-col sm="10">
              <b-form-group>
                <label for="name">Project Name</label>
                <b-form-input type="text" id="name" placeholder="Enter Project Name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="10">
              <b-form-group>
                <label for="name">Project Description</label>
                <b-form-input type="text" id="project-description" placeholder="Enter Description of Project"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Start Date" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group
                label="End Date" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Last Updated" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group >
                <label for="company">Company</label>
                <b-form-select id="CompanySelect"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Assupol',value: '1'},
                    {text: 'Discovery',value: '2'},
                    {text: 'Investec',value: '3'},
                    {text: 'Standard Bank',value: '4'},
                  ]"
                  value="null">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="username">Project Manager Username</label>
                <b-form-input type="text" id="username" placeholder="Enter Employee ID"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <label for="select-structure">Department/Devision</label>
              <b-form-select id="select-structure"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Information Technology',value: '1'},
                    {text: 'Finance',value: '2'},
                    {text: 'Marketing',value: '3'},
                    {text: 'Consulting',value: '4'},
                  ]"
                  value="null">
              </b-form-select>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true
    }
  },
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
