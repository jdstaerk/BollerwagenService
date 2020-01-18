<template>
  <div class="light-settings">
    <div class="row">
      <div class="col-11" style="padding-left: 0px; padding-right: 0px;">
        <label for="raspberry-pi-stats">Lights</label>
      </div>
      <div
        class="col-1 text-right"
        style="padding-left: 0px; padding-right: 0px;"
      >
        <font-awesome-icon
          icon="redo"
          :spin="isLoading"
          @click="fetchLightData()"
        />
      </div>
    </div>
    <div class="row box" style="padding-bottom: 15px;">
      <div class="col-12">
        <select
          class="custom-select"
          v-model="lightEffect"
          :disabled="isLoading"
        >
          <option disabled value="999">Lichteffekt auswählen</option>
          <option v-bind:value="0">Off</option>
          <option v-bind:value="1">Default</option>
          <option v-bind:value="2">Sinus Wave</option>
          <option v-bind:value="3">Pulse</option>
          <option v-bind:value="4">Static Color Cycle</option>
        </select>
      </div>
      <br />
      <div class="col-12 text-center col-color-picker">
        <verte
          v-model="colorFront"
          picker="square"
          model="rgb"
          menuPosition="top"
        ></verte>
      </div>
      <div class="col-3 col-color-picker"></div>
      <div class="col-3 col-color-picker">
        <verte picker="square" model="rgb" menuPosition="top"></verte>
      </div>
      <div class="col-3 text-centera col-color-picker">
        <verte picker="square" model="rgb" menuPosition="top"></verte>
      </div>
      <div class="col-3 col-color-picker"></div>
      <div class="col-12 text-center col-color-picker">
        <verte picker="square" model="rgb" menuPosition="bottom"></verte>
      </div>
      <br />
      <div class="col-12">
        <button
          type="button"
          class="btn btn-block btn-primary"
          @click="setLight()"
        >
          <font-awesome-icon
            v-show="isSendingLightValues"
            icon="circle-notch"
            :spin="true"
          /> Übernehmen
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Verte from "verte";
import "verte/dist/verte.css";

export default {
  name: "LightSettings",
  components: {
    Verte
  },
  data() {
    return {
      isSendingLightValues: false,
      isLoading: true,
      lightEffect: 0,
      colorFront: "",
      colorRight: "",
      colorRear: "",
      colorLeft: ""
    };
  },
  methods: {
    fetchLightData: function() {
      this.isLoading = true;
      axios
        .get("/api/v1/current-light-effect")
        .then(response => {
          this.lightEffect = response.data;
        })
        .catch(e => {
          this.$toasted.error(
            "Fehler: Daten konnten nicht aktualisiert werden.",
            {
              theme: "bubble",
              position: "bottom-right",
              duration: 2500
            }
          );
          console.error(e);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    setLight: function() {
      this.isSendingLightValues = true;
      axios
        .get("/api/v1/set-light", {
            params: {
                lightEffect: this.lightEffect,
                front: this.colorFront,
                right: this.colorRight,
                rear: this.colorRear,
                left: this.colorLeft,
            }
        })
        .then(response => {})
        .catch(e => {
          this.$toasted.error(
            "Fehler: Licht konnte nicht richtig gesetzt werden.",
            {
              theme: "bubble",
              position: "bottom-right",
              duration: 2500
            }
          );
          console.error(e);
        })
        .finally(() => {
          this.isSendingLightValues = false;
        });
    }
  },
  created() {
    this.fetchLightData();
  }
};
</script>

<style scoped>
.row {
  margin-left: 15px;
  margin-right: 15px;
}

.col-color-picker {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
