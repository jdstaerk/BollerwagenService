<template>
  <div class="light-settings">
    <div class="row">
      <div class="col-12" style="padding-left: 0px; padding-right: 0px;">
        <label for="raspberry-pi-stats">Lights</label>
      </div>
    </div>
    <div class="row box">
      <div class="col-12">
        Hier kommen die Light Settings hin!
      </div>
      <div class="col-12">
        An / Aus
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightSettings",
  data() {
    return {
      // Initialized to zero to begin
      count: 0
    };
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
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
