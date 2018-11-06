<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12" lg="8">
            <b-card header=" Listed Companies">
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
            <b-col md='13' >
              <b-card border-variant='dark'>
            <b-col>
              <vs-tabs :color="colorx" >
      <vs-tab @click="colorx = 'rgb(23, 162, 184)'" vs-label="Search">
        <div class="con-tab-ejemplo">
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="ghost-info">
              <i class="fa fa-search"></i>&nbsp;Confirm
            </b-button>
          </b-col>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'rgb(77, 189, 116)'" vs-label="Add">
        <div class="con-tab-ejemplo">
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="ghost-success">
              <i class="fa fa-plus-square-o  "></i>&nbsp;Confirm
            </b-button>
          </b-col>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'rgb(255, 193, 7)'" vs-label="Update">
        <div class="con-tab-ejemplo">
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="ghost-warning">
              <i class="fa fa-cloud-upload"></i>&nbsp;Confirm
            </b-button>
          </b-col>
        </div>
      </vs-tab>
      <vs-tab @click="colorx = 'rgb(248, 108, 107)'" vs-label="Delete">
        <div class="con-tab-ejemplo">
          <b-col sm xs="12" class="text-center mt-3">
            <b-button variant="ghost-danger">
              <i class="fa fa-trash "></i>&nbsp;Confirm
            </b-button>
          </b-col>
        </div>
      </vs-tab>
        <vs-tab @click="colorx = 'rgb(16, 233, 179)'" vs-label="Analysis">
        <div class="con-tab-ejemplo">
          RGB | HEX
        </div>
      </vs-tab>
    </vs-tabs>
            </b-col>
            </b-card>
            </b-col>
            
          </b-col>
          <b-col sm="4">
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
