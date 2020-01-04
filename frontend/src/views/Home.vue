<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2 id="heading-bollerwagen-ui" class="text-center">BollerwagenUI</h2>
      </div>
    </div>
    <div class="row">
        <RaspberryPiStats id="raspberry-pi-stats" />
    </div>
    <br />
    <div class="row">
        <CommandRunner id="command-runner" />
    </div>
    <br />
    <div class="row box">
      <div class="col-12">
        <label for="light-settings">Light Settings</label>
      </div>
      <div class="col-12">
        <LightSettings id="light-settings" class="box" />
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import RaspberryPiStats from "@/components/RaspberryPiStats.vue";
import CommandRunner from "@/components/CommandRunner.vue";
import LightSettings from "@/components/LightSettings.vue";

export default {
  name: "home",
  components: {
    RaspberryPiStats,
    CommandRunner,
    LightSettings,
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display&display=swap");

#heading-bollerwagen-ui {
  font-family: "Sedgwick Ave Display", cursive;
  font-size: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: rgba(0, 0, 0, 0.9);
}

#raspberry-pi-stats {
    width: 100%;
}

#command-runner {
    width: 100%;
}
</style>
