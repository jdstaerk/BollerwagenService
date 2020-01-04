<template>
  <div class="command-runner">
    <div class="row">
      <div class="col-12" style="padding-left: 0px; padding-right: 0px;">
        <label for="raspberry-pi-stats">Execute Command</label>
      </div>
    </div>
    <div class="row box">
      <div class="col-10">
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon1">$</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="sudo shutdown -h now"
            v-model="command"
          />
        </div>
      </div>
      <div class="col-2 text-right" style="padding-left: 0px;">
        <button type="button" class="btn btn-primary" @click="sendCommand()">
            <font-awesome-icon v-if="isLoading" icon="redo" :spin="isLoading" />
            <span v-else>Run</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CommandRunner",
  components: {},
  data() {
    return {
      isLoading: false,
      command: ""
    };
  },
  methods: {
    sendCommand: function() {
      this.isLoading = true;
      let toastMessage = "";
      axios
        .post("http://raspberrypi.local/api/v1/command", {
          command: this.command
        })
        .then(response => {
          toastMessage = "Befehl erfolgreich ausgeführt.";
        })
        .catch(e => {
          console.error(e);
          toastMessage =
            "Der Befehl konnte nicht erfolgreich ausgeführt werden.";
        })
        .finally(() => {
          this.isLoading = false;
          this.$toasted.show(toastMessage, {
            theme: "bubble",
            position: "bottom-right",
            duration: 2500
          });
        });
    }
  }
};
</script>

<style scoped>
.row {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
