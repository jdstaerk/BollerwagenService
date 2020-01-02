<template>
  <div class="light-settings">
      <div class="row">
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
  name: 'LightSettings',
  data() {
    return {
      // Initialized to zero to begin
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1;
    },
    decrement() {
      this.count -= 1;
    }
  }
}
</script>

<style scoped>

</style>
