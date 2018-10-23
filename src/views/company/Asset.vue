<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Add Asset</strong>
            <b-row></b-row> 
            <small>Enter Asset Details</small>
          </div>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="asset-tag">Asset Tag</label>
                <b-form-input type="text" id="asset-tag" placeholder="Enter asset tag issued by company"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group
                label="Asset Type"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select', 'Laptop','Cellphone', 'Vehicle','Desktop','Monitor']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="brand">Brand</label>
                <b-form-input type="text" id="brand" placeholder="e.g. Dell, Toshiba, Apple, etc."></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4">
              <b-form-group>
                <label for="asset-serial">Asset Serial No.</label>
                <b-form-input type="text" id="asset-serial" placeholder="Enter asset tag issued by company"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="6">
              <b-form-group>
                <label for="employee-id">Employee ID</label>
                <b-form-input type="text" id="employee-id" placeholder="Enter Employee ID issued by company"></b-form-input>
              </b-form-group>
            </b-col>
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
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Date Issued" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="2">
              <b-form-group
                label="Date Returned" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Asset Condition"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select', 'New','Used','Damaged']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="2">
              <b-form-group
                label="Warrenty Expiration" label-for="date"
                :label-cols="3"
                :horizontal="false">
              <b-form-input type="date" id="date"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="10">
              <b-form-group>
                <label for="state-description">State Description</label>
                <b-form-input type="text" id="state-description" placeholder="Enter Description of the Assets Condition"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="10">
              <b-form-group>
                <label for="use-description">Use Description</label>
                <b-form-input type="text" id="use-description" placeholder="Enter Description of the Function the Assset serves"></b-form-input>
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
