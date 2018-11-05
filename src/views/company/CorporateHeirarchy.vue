<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" lg="8">
            <b-card header=" Listed Company Structures">
              <b-table class="mb-0 table-outline" responsive="sm" hover :items="tableItems" :fields="tableFields" head-variant="dark">
                <div slot="avatar" class="avatar" slot-scope="item">
                  <img :src="item.value.url" class="img-avatar" alt="">
                  <span class="avatar-status" v-bind:class="{ 'bg-success': item.value.status == 'success',  'bg-warning': item.value.status == 'warning', 'bg-danger': item.value.status == 'danger', 'bg-secondary': item.value.status == '' }"></span>
                </div>
                <div slot="user" slot-scope="item">
                  <div>{{item.value.name}}</div>
                  <div class="small text-muted">
                    <span>
                      <template v-if="item.value.new">New</template>
                      <template v-else>Recurring</template>
                    </span> | Registered: {{item.value.registered}}
                  </div>
                </div>
                <i slot="country" class="h4 mb-0" :class="flag(item.value.flag)" slot-scope="item" :title="item.value.flag" :id="item.value.flag"></i>
                <i class="flag-icon flag-icon-pw h1" title="pw" id="pw"></i>
                <div slot="usage" slot-scope="item">
                  <div class="clearfix">
                    <div class="float-left">
                      <strong>{{item.value.value}}%</strong>
                    </div>
                    <div class="float-right">
                      <small class="text-muted">{{item.value.period}}</small>
                    </div>
                  </div>
                  <b-progress height={} class="progress-xs" v-model="item.value.value" :variant="variant(item.value.value)"></b-progress>
                </div>
                <i slot="payment" slot-scope="item" :class="item.value.icon" style="font-size:24px"></i>
                <div slot="activity" slot-scope="item">
                  <div class="small text-muted">Last login</div>
                  <strong>{{item.value}}</strong>
                </div>
              </b-table>
            </b-card>
          </b-col>
    </b-row>
    <b-row>
      <vs-tabs :color="colorx">
      <vs-tab @click="colorx = 'rgb(23, 162, 184)'" vs-label="Search">
        <div class="con-tab-ejemplo">
          
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'success'" vs-label="Add">
        <div class="con-tab-ejemplo">
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
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'warning'" vs-label="Update">
        <div class="con-tab-ejemplo">
          Warning
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'danger'" vs-label="Delete">
        <div class="con-tab-ejemplo">
          Dark
        </div>
      </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" vs-label="RGB | HEX">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
    </vs-tabs>
    </b-row>
    <b-row>
      
    </b-row>
  </div>
</template>

<script>

export default {
  name: 'forms', 
  data () {
    return {
      selected: ['Month',], // Must be an array reference!
      colorx:'rgb(23, 162, 184)',
      tableItems: [
        {
          avatar: { url: 'img/avatars/1.jpg', status: 'success' },
          user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'USA', flag: 'us' },
          usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
          activity: '10 sec ago'
        },
        {
          avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
          user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
          country: { name: 'Brazil', flag: 'br' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
          activity: '5 minutes ago'
        },
        {
          avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'India', flag: 'in' },
          usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
          activity: '1 hour ago'
        },
        {
          avatar: { url: 'img/avatars/4.jpg', status: '' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'France', flag: 'fr' },
          usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'PayPal', icon: 'fa fa-paypal' },
          activity: 'Last month'
        },
        {
          avatar: { url: 'img/avatars/5.jpg', status: 'success' },
          user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Spain', flag: 'es' },
          usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
          activity: 'Last week'
        },
        {
          avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
          user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
          country: { name: 'Poland', flag: 'pl' },
          usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
          payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
          activity: 'Last week'
        }
      ],
      tableFields: {
        avatar: {
          label: '<i class="icon-people"></i>',
          class: 'text-center'
        },
        user: {
          label: 'User'
        },
        country: {
          label: 'Country',
          class: 'text-center'
        },
        usage: {
          label: 'Usage'
        },
        payment: {
          label: 'Payment method',
          class: 'text-center'
        },
        activity: {
          label: 'Activity'
        }
      }
    }
  },
  methods: {
    variant (value) {
      let $variant
      if (value <= 25) {
        $variant = 'info'
      } else if (value > 25 && value <= 50) {
        $variant = 'success'
      } else if (value > 50 && value <= 75) {
        $variant = 'warning'
      } else if (value > 75 && value <= 100) {
        $variant = 'danger'
      }
      return $variant
    },
    click () {
      // do nothing
    },
    flag (value) {
      return 'flag-icon flag-icon-' + value
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
