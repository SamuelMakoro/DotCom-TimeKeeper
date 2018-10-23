<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Add Company </strong>
            <b-row></b-row>
            <small> Enter Details</small>
          </div>
          <b-form-group>
            <label for="company">Company</label>
            <b-form-input type="text" id="company" placeholder="Enter your company name"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="vat">VAT</label>
            <b-form-input type="text" id="vat" placeholder="PL1234567890"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="industry">Industry</label>
            <b-form-input type="text" id="industry" placeholder="e.g. Banking, Incurance, etc."></b-form-input>
          </b-form-group>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Add Address </strong>
            <b-row></b-row>
            <small> Location of Offices</small>
          </div>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Address Type"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select','Physical Address', 'P.O. Box']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group
                label="Office Type"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select','Head Office', 'Branch Office']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
          </b-row>
          <b-form-group>
            <label for="street-line-1">Street Line 1</label>
            <b-form-input type="text" id="street-line-1" placeholder="Street Line 1"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label for="street-line-2">Street Line 2</label>
            <b-form-input type="text" id="street-line-2" placeholder="Street Line 2"></b-form-input>
          </b-form-group>
          <b-row>
            <b-col sm="4">
              <b-form-group>
                <label for="postal-code">Postal Code</label>
                <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group>
                <label for="city">City</label>
                <b-form-input type="text" id="city" placeholder="City Name"></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>
          <b-row>
            <b-col sm="4">
              <b-form-group
                label="Province"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select','Option 1', 'Option 2', 'Option 3', 'Option 4']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            <b-col sm="4" offset-sm="1">
              <b-form-group>
                <label for="country">Country</label>
                <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
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
