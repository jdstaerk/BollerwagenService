<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 id="heading-bollerwagen-os" class="text-center">BollerwagenOS</h2>
      </div>
    </div>
    <div class="row box">
      <div class="col-12">
        <RaspberryPiStats id="raspberry-pi-stats" />
      </div>
    </div>
    <br />
    <div class="row">
      <!--<div class="col-12">
        <label for="light-settings">Lights</label>
      </div>-->
      <div class="col-12">
        <LightSettings id="light-settings" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import LightSettings from "@/components/LightSettings.vue";
import RaspberryPiStats from "@/components/RaspberryPiStats.vue";

export default {
  name: "home",
  components: {
    LightSettings,
    RaspberryPiStats
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display&display=swap");

#heading-bollerwagen-os {
  font-family: "Sedgwick Ave Display", cursive;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.9);
}

label {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
}

.box {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);

  background-color: rgba(255, 255, 255, 0.95);
}
</style>
