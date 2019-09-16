<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="5">
          <b-card-group>
            <b-card no-body class="p-2">
              <b-card-body>
                <b-form @submit="onSubmit">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="form.email" placeholder="Email" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" v-model="form.pass" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button type="submit" variant="primary" class="px-4">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <!-- <b-card no-body class="text-white bg-primary py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div>
                  <h2>Sign up</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <b-button variant="primary" class="active mt-3">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card> -->
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {firebaseAuth} from "@/firebaseApp"
export default {
  name: 'Login',
  data(){
    return{
      form:{
        email:'',
        pass:''
      }
    }
  },
  methods:{
    onSubmit(e) {
        e.preventDefault()
        // console.log(this.form)
        firebaseAuth.signInWithEmailAndPassword(
          this.form.email,
          this.form.pass
        )
        .then(
          user => {
            console.log(user)
            // this.$Loading.finish();
            //alert('you are logged in');
            // this.$router.replace("dashboard");
            if(user.operationType == 'signIn'){
              this.$router.replace("dashboard");
            }else{
              this.$router.replace("login");
            }
          }
        ).catch((error)=> {
          //console.log(error);
          alert(error.message);
            // this.$Loading.error();
        });
      // e.preventDefault;
        // alert(JSON.stringify(this.form))
      },
  }
}
</script>
