<template>
    <div class="row">
        <div class="col-12 text-center mb-4">
            <h1>Forgot Password</h1>
        </div>
        <div class="col-sm-5 m-auto">
            <form @submit.prevent="sendEmail" id="forgotpassword">
                <div class="row text-left">
                    <div class="col-sm-12 form-group">
                        <label for="email">Email Address</label>
                        <input type="email" id="email" v-model="email" class="form-control form-control-lg">
                    </div>
                </div>
                   <div class="col-sm-12 text-center form-group">
                         <button type="submit" @click="sendEmail" class="btn btn-lg btn-primary px-4">
            <transition name="fade" mode="out-in">
              <span v-if="!emailSending">Send</span>
              <span v-else>Sending...</span>
            </transition>
          </button>
                   </div>
            </form>
        </div>
    </div>
</template>
<script>
  import firebase from "firebase";

export default {
  data() {
    return {
      email: "",
      error: null,
      emailSending: false,
    };
  },
  methods: {
    sendEmail() {
      if (!this.email) {
        this.error = "Please type in a valid email address.";
        return;
      }
      this.error = null;
      this.emailSending = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.emailSending = false;
        })
        .catch(error => {
          this.emailSending = false;
          this.error = error.message;
        });
    },
  },
};
</script>