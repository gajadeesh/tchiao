<template>
  <div>
    <b-card header-tag="header">
      <div slot="header">
        <i class="icon-envelope"></i> Messages
      </div>
      <b-card-body>
        <b-row class="p-2">
          <b-col>
            <b-button @click="messageSend = !messageSend" block variant="info text-white">Compose</b-button>
            <b-modal size="lg" class="modal fade" title="New message" v-model="messageSend" centered id="modal-1">
              <div class="form-group">
                <label
                  for="recipient-name"
                  class="col-form-label font-weight-bold"
                >Notification Or Email</label>
                <b-form-select v-model="NOEselected" :options="NOEoptions" size="sm" class="mt-3"></b-form-select>
              </div>
              <div class="modal-body" v-if="NOEselected">
                <form>
                  <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                    <!-- <input type="text" v-model="Evalue" :options="emailOptions" class="form-control" id="recipient-name"> -->
                    <multiselect
                      v-model="Evalue"
                      placeholder="Enter Email"
                      label="name"
                      track-by="code"
                      :options="emailOptions"
                      :multiple="true"
                      @tag="addTag"
                      :taggable="true"
                    ></multiselect>
                  </div>
                  <div class="form-group">
                    <label for="subject-name" class="col-form-label">Subject:</label>
                    <input
                      type="text"
                      v-model="notification.title"
                      class="form-control"
                      id="subject-name"
                    />
                  </div>
                  <div class="form-group">
                    <vue-editor v-model="notification.message"></vue-editor>
                    <!-- <label for="message-text" class="col-form-label">Message:</label>
                    <textarea class="form-control" v-model="notification.message" id="message-text"></textarea> -->
                  </div>
                </form>
                <b-alert variant="success" :show="alertSuccess">Successfully sent!!... 
                  <!-- <b>Success Count : {{emailSuccessCount}}</b> -->
                  </b-alert>
                 <b-alert variant="danger" :show="alertFailed">Failed sending!!...</b-alert>
              </div>
              <div slot="modal-footer" class="w-100">
                <!-- <p class="float-left">Modal Footer Content</p> -->
                <b-row class="float-right p-2">
                  <b-button size="sm" @click="show=false">Close</b-button>&nbsp;&nbsp;
                  <b-button
                    variant="danger"
                    :disabled="!NOEselected"
                    size="sm"
                    @click="onSubmit"
                  >Send</b-button>
                </b-row>
              </div>
            </b-modal>
          </b-col>
          <b-col cols="8">
            <b-input
              v-model="search"
              type="text"
              size="md"
              aria-describedby="password-help-block"
              placeholder="Search inbox"
            ></b-input>
          </b-col>
          <b-col>
            <b-form-select v-model="selected" :options="messagingOptions" size="md"></b-form-select>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <ul class="list-group" v-for="list in lists" :key="list.id">
              <li class="list-group-item">
                <b-row>
                  <b-col cols="3">
                    <!-- <b-row> -->
                    <h6>
                      <span class="cui-star" aria-hidden="true"></span>
                      &nbsp;&nbsp;&nbsp;
                      {{ InboxFrom[Math.floor(Math.random()*InboxFrom.length)]}}
                    </h6>
                    <!-- </b-row> -->
                  </b-col>
                  <b-col cols="8">
                    <b-row>
                      <h6>
                        <span class="badge badge-secondary">inbox</span>
                        &nbsp;&nbsp; {{InboxTitles[Math.floor(Math.random()*InboxTitles.length)]}}
                        <span
                          class="text-muted"
                        >- {{InboxEmails[Math.floor(Math.random()*InboxEmails.length)]}}</span>
                      </h6>
                    </b-row>
                  </b-col>
                  <b-col cols="1">
                    <h6>Aug {{dates}}</h6>
                  </b-col>
                </b-row>
              </li>
            </ul>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import { setTimeout } from 'timers';
import { VueEditor } from "vue2-editor";
// import { async } from 'q';

// register globally
// Vue.component('multiselect', Multiselect)
export default {
  data() {
    return {
      messageSend:false,
      alertSuccess: false,
      alertFailed: false,
      emailSuccessCount:0,
      NOEselected: "",
      NOEoptions: [
        { value: null, text: "Please select an option" },
        { value: "notification", text: "Notifications" },
        { value: "email", text: "Email" }
      ],
      notification: {
        title: "",
        message: ""
      },
      search: "",
      InboxFrom: ["Facebook", "Google", "Yahoo", "Watch Movies"],
      InboxTitles: [
        "The standard Lorem Ipsum passage, used since the 1500s",
        'Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC',
        "1914 translation by H. Rackham",
        "Lorem ipsum began as scrambled",
        "Creation timelines for the standard lorem ipsum passage vary",
        "Lorem ipsum was purposefully designed to have no meaning",
        'orem ipsum was popularized in the 1960s with Letraset"s dry-transfer sheets'
      ],
      InboxEmails: [
        "yenya@verizon.net",
        "weazelman@mac.com",
        "jshearer@sbcglobal.net",
        "miltchev@att.net",
        "ryanshaw@live.com",
        "chlim@aol.com",
        "petersen@outlook.com",
        "noodles@yahoo.com",
        "british@verizon.net",
        "dhrakar@yahoo.com",
        "themer@outlook.com",
        "dhrakar@outlook.com"
      ],
      dates: Math.floor(Math.random() * 31),
      lists: 20,
      selected: "",
      Evalue: null,
      emailOptions: [{ name: "@all", code: "@all" }],
      messagingOptions: [
        { value: "inbox", text: "Inbox" },
        { value: "notification", text: "Notification" }
      ]
    };
  },
  components: { 
    Multiselect,
    VueEditor
    },
  methods: {
    onSubmit: async function() {
      // console.log(process.env.VUE_APP_EMAIL_SEND_URL)
      const emailList = [];
      this.emailOptions.filter(email => {
       emailList.push(email.name);
        
      });
      emailList.toString()
      // if (NOEselected == "notification") {
      //   const Nheader = {
      //     headers: {
      //       "Content-Type": "application/json",
      //       Authorization: process.env.VUE_APP_FCM_KEY
      //     }
      //   };

      //   const data = {
      //     to:
      //       "es-OMlNqaWg:APA91bFiXP2dHWT-F9a0wNgbDVSGF-9QiLxYIsr8498UeCl2WKuFXG3pdjq02CVPol-E9nMJ5KDasnnx01Cemz7Kn5rmiQmZRU2OzFXkes9i-477ZxkZUAv_gE1ojcl86DIMdP3rOBbt",
      //     content_available: true,
      //     notification: {
      //       title: this.notification.title,
      //       body: this.notification.message,
      //       click_action: "fcm.ACTION.HELLO"
      //     },
      //     data: {
      //       extra: "juice"
      //     }
      //   };

      //   await axios
      //     .post(process.env.VUE_APP_FCM_URL, data, Nheader)
      //     .then(response => {
      //       console.log(response);
      //     })
      //     .catch(err => {
      //       console.log(err);
      //     });
      // } else if (NOEselected == "email") {
        // console.log(emailList)
        const Edata = {
            email :emailList.slice(1).toString(),
            subject: this.notification.title.toString(),
            content: this.notification.message.toString()
          
        }
        const header = {
          "api-key": process.env.VUE_APP_AXIOS_API_KEY,
          "api-secret" : process.env.VUE_APP_AXIOS_API_SECRET
        }
        await axios
          .post(process.env.VUE_APP_EMAIL_SEND_URL, Edata, {headers:header})
          .then(response => {
            console.log(response.data)
            // this.emailSuccessCount = response.data.successCount.accepted.length -1
            if(response.data.code == "SUCCESS"){
              this.alertSuccess = true
              setTimeout(() => {
                this.messageSend = false
                this.alertSuccess = false
                this.Evalue = null
                this.notification.title = ''
                this.notification.message = ''
              }, 5000);
            }else if(esponse.data.code == "FAILED"){
              this.alertFailed = true
              setTimeout(() => {
                this.alertFailed = false
              }, 5000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      // }
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000)
      };
      this.emailOptions.push(tag);
      this.Evalue.push(tag);
    }
  }
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>

