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
      <div class="col-12" v-show="!isLoading">
        <select class="custom-select" v-model="lightEffect">
          <option disabled value="1">Lichteffekt auswählen</option>
          <option v-bind:value="0">Off</option>
          <option v-bind:value="1">Default</option>
          <option v-bind:value="2">Sinus Wave</option>
          <option v-bind:value="3">Static Color Cycle</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LightSettings",
  data() {
    return {
      isLoading: true,
      lightEffect: 0
    };
  },
  methods: {
    fetchLightData: function() {
      this.isLoading = true;
      axios
        .get("http://raspberrypi.local/api/v1/current-light-effect")
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
</style>
