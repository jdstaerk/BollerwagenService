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
    <div class="row">
      <LightSettings id="light-settings" />
    </div>
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
    LightSettings
  }
};
</script>

<style scoped>
/*@import url("https://fonts.googleapis.com/css?family=Sedgwick+Ave+Display&display=swap");*/

/* sedgwick-ave-display-regular - latin */
/* sedgwick-ave-display-regular - latin */
@font-face {
  font-family: 'Sedgwick Ave Display';
  font-style: normal;
  font-weight: 400;
  src: local('Sedgwick Ave Display Regular'), local('SedgwickAveDisplay-Regular'),
       url('../fonts/sedgwick-ave-display-v5-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('../fonts/sedgwick-ave-display-v5-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

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

#light-settings {
  width: 100%;
}
</style>
