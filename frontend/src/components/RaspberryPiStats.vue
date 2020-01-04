<template>
  <div class="raspberry-pi-stats">
    <div class="row">
      <div class="col-11" style="padding-left: 0px; padding-right: 0px;">
        <label for="raspberry-pi-stats">RPi Stats</label>
      </div>
      <div
        class="col-1 text-right"
        style="padding-left: 0px; padding-right: 0px;"
      >
        <font-awesome-icon icon="redo" :spin="isLoading" @click="fetchData()" />
      </div>
    </div>
    <div class="row box">
      <div class="col-4" v-for="item in stats" v-bind:key="item.name">
        <div class="text-center">
          <h3 class="big-number">{{ item.value }}</h3>
          <p class="big-number-label">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RaspberryPiStats",
  components: {},
  data() {
    return {
      isLoading: true,
      stats: []
    };
  },
  methods: {
    fetchData: function() {
      this.isLoading = true;
      axios
        .get("http://raspberrypi.local/api/v1/pi-stats")
        .then(response => {
          this.stats = response.data;
          /*this.$toasted.show("Befehl gesendet", {
            theme: "bubble",
            position: "bottom-right",
            duration: 2500
          });*/
        })
        .catch(e => {
          console.error(e);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.big-number {
  color: rgba(0, 0, 0, 0.9);
}

.row {
  margin-left: 15px;
  margin-right: 15px;
}
</style>
