<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Add Company Structure </strong>
            <b-row></b-row>
            <small> Enter Devision or Department</small>
          </div>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="name">Structure Name</label>
                <b-form-input type="text" id="name" placeholder="Enter Devision/Department Name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <b-form-group
              label="Structure Type"
              label-for="basicRadios"
              :label-cols="3"
              :horizontal="false">
                <b-form-radio-group id="basicRadios"
                  :plain="true"
                  :options="[
                    {text: 'Devision',value: '1'},
                    {text: 'Department',value: '2'},
                  ]"
                  checked="2">
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group >
                <label for="month1">Company</label>
                <b-form-select id="CompanySelect"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Assupol',value: '1'},
                    {text: 'Discovery',value: '2'},
                    {text: 'Investec',value: '3'},
                    {text: 'Standard Bank',value: '2'},
                  ]"
                  value="null">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group>
                <label for="year1">Parent Structure</label>
                <b-form-select id="StructureSelect"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Information Technology',value: '1'},
                    {text: 'Finance',value: '2'},
                    {text: 'Marketing',value: '3'},
                    {text: 'Consulting',value: '2'},
                    ]"
                    value="null">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Add Contact Details</strong>
            <b-row></b-row>
            <small>Contact Information of Company Structures</small>
          </div>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="company">Contact Number</label>
                <b-form-input type="text" id="contact" placeholder="Enter Devison/Department Number"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="vat">Contact Type</label>
                <b-form-select id="ContactSelect"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Phone',value: '1'},
                    {text: 'Cell',value: '2'},
                    {text: 'Fax',value: '3'},
                    ]"
                    value="null">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="9">
              <b-form-group>
                <label for="company">Email Address</label>
                <b-form-input type="text" id="email" placeholder="Enter Devison/Department Email"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="vat">Email Type</label>
                <b-form-select id="EmailSelect"
                  :plain="true"
                  :options="[
                    {text: 'Please select',value: 'null'},
                    {text: 'Devision/Department',value: '1'},
                    {text: 'Employee Email',value: '2'},
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
