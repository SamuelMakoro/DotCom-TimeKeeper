<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form>
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                  <b-row>
                    <b-col>
                      <b-button @click="login" variant="primary" class="active mt-3">Microsoft Account</b-button>
                      <button @click="callAPI" type="button" v-if="user">
                         Call Graph's /me API
                      </button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AuthService from '../../services/auth.service';
import GraphService from '../../services/graph.service';

export default {
  name: 'Login',

  created() {
    this.authService = new AuthService();
    this.graphService = new GraphService();
  },
  methods: {
    callAPI() {
      this.apiCallFailed = false;
      this.authService.getToken().then(
        token => {
          this.graphService.getUserInfo(token).then(
            data => {
              this.userInfo = data;
            },
            error => {
              console.error(error);
              this.apiCallFailed = true;
            }
          );
        },
        error => {
          console.error(error);
          this.apiCallFailed = true;
        }
      );
    },

    logout() {
      this.authService.logout();
    },

    login() {
      this.loginFailed = false;
      this.authService.login().then(
        user => {
          if (user) {
            this.user = user;
          } else {
            this.loginFailed = true;
          }
        },
        () => {
          this.loginFailed = true;
        }
      );
    }
  }
}
</script>
