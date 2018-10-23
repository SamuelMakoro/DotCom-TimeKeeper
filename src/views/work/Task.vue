<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Add New Task</strong>
            <b-row></b-row>
            <small> Enter Details of New Task</small>
          </div>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="name">Task Name</label>
                <b-form-input type="text" id="name" placeholder="Enter Project Name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="name">Task Description</label>
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
                label="Start Time" label-for="time"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="time" id="time"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="End Date" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
            <b-form-group
                label="End Time" label-for="time"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="time" id="time"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
            label="Employee ID"
            label-for="basicStatic"
            :label-cols="4"
            :horizontal="false">
            <b-form-input plaintext id="basicStatic" type="text" value="Username"></b-form-input>
          </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group >
                <label for="select-project">Select Project</label>
                <b-form-select id="select-project"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Finance App',value: '1'},
                    {text: 'Time Keeper App',value: '2'},
                    {text: 'Reporting App',value: '3'},
                    {text: 'Asset Management App',value: '4'},
                  ]"
                  value="null">
                </b-form-select>
              </b-form-group>
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
  },
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
