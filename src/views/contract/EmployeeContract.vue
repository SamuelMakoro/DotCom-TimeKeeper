<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Add Employee Contract</strong>
            <b-row></b-row>
            <small> Enter Details of Employee Contract</small>
          </div>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="name">Employee Username</label>
                <b-form-input type="text" id="name" placeholder="Enter Employee ID or Username"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="name">File Number</label>
                <b-form-input type="text" id="file-number" placeholder="Enter Contract File Number"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group
                label="Employee Type"
                label-for="basicRadios"
                :label-cols="3"
                :horizontal="false">
                  <b-form-radio-group id="basicRadios"
                    :plain="true"
                    :options="[
                      {text: 'Permanent',value: '1'},
                      {text: 'Consultant',value: '2'},
                    ]">
                  </b-form-radio-group>
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
                label="Review Date" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group>
                <label for="name">Rate</label>
                <b-form-input type="number" id="file-number" placeholder="Enter Employee Rate"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="contract-description">Contract Description</label>
                <b-form-input type="text" id="contract-description" placeholder="Enter Description of Contract Stipulations"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <b-card class="card-accent-warning">
          <div slot="header">
            <strong>Termination/Non-Renewal</strong>
            <b-row></b-row>
            <small>Enter Details about Contract Ending</small>
          </div>
          <b-row>
            <b-col sm="9">
              <b-form-group
                  label="Conditions of Cancellation"
                  label-for="basicRadios"
                  :label-cols="3"
                  :horizontal="false">
              <b-form-radio-group id="basicRadios"
                :plain="true"
                :options="[
                  {text: 'Non-Renewal',value: '1'},
                  {text: 'Termination',value: '2'},
              ]">
              </b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                  <label for="contract-description">Cancellation Description</label>
                  <b-form-input type="text" id="contract-description" placeholder="Enter Description of the reason for contract cancelation."></b-form-input>
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
