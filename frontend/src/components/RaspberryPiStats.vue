<template>
  <div class="raspberry-pi-stats">
    <div class="row">
      <div class="col-4" v-for="item in stats" v-bind:key="item.name">
          <h2>{{item.value}}</h2>
          <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RaspberryPiStats",
  components: {},
  data() {
    return {
        stats: [{name: 'CPU', value: '48%'}, {name: 'RAM', value: '71%'}, {name: 'Temp', value: '35° C'}, ]
    };
  },
  methods: {
    fetchData() {}
  },
};
</script>

<style scoped>
.chart-box {
  padding: 0px;
  border-right: 0.25px solid #484848;
}

</style>
