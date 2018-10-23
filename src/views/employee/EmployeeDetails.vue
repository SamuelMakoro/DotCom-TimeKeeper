<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Add Employee Detials</strong>
            <br> 
            <small>Enter Basic Information</small>
          </div>
          <b-form>
            <b-row>
              <b-col sm="9">
                <b-form-group>
                  <label for="name">Full Name</label>
                  <b-form-input type="text" id="name" placeholder="Enter Full Name and Surname"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group
                  label="Date of Birth" label-for="date"
                  :label-cols="3"
                  :horizontal="false">
                <b-form-input type="date" id="date"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4" offset-sm="1">
                <b-form-group>
                  <label for="name">Tax Number</label>
                  <b-form-input type="text" id="tax-number" placeholder="Enter Tax Number Issued"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="9">
                <b-form-group>
                  <label for="job-title">Job Title</label>
                  <b-form-input type="text" id="job-title" placeholder="Enter Job Title or Job Description"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
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
          </b-form>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Add Employee Skill</strong>
            <br> 
            <small>Enter List of Skill and Technologies</small>
          </div>
          <b-form>
            <b-row>
              <b-col sm="9">
                <b-form-group>
                  <label for="name">Skill Name</label>
                  <b-form-input type="text" id="name" placeholder="Enter Name of Skill/Technology"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="9">
                <b-form-group>
                  <label for="skill-description">Skill Description</label>
                  <b-form-input type="text" id="skill-description" placeholder="Enter Description of Skill/Technology"></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-form>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Add Employee Contacts</strong>
            <br> 
            <small>Enter Basic Contact Details</small>
          </div>
          <b-form>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="contact-number">Contact Number</label>
                  <b-form-input type="text" id="contact-number" placeholder="Enter Contact Number"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4" offset-sm='1'>
              <b-form-group
                label="Number Type"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select','Work Cellphone', 'Personal Cellphone', 'Telephone', 'Fax']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <b-form-group>
                  <label for="email-address">Email Address</label>
                  <b-form-input type="text" id="email-address" placeholder="Enter Email Address"></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="4" offset-sm='1'>
              <b-form-group
                label="Email Type"
                label-for="basicSelect"
                :label-cols="3"
                :horizontal="false">
                <b-form-select id="basicSelect"
                  :plain="true"
                  :options="['Please select','Work','Personal', 'Devision/Department']"
                  value="Please select">
                </b-form-select>
              </b-form-group>
            </b-col>
            </b-row>
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
          </b-form>
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
