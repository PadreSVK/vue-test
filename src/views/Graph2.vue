<template>
  <div>
    <highcharts class="hc" :options="chartOptions" ref="chart">
    </highcharts>
  </div>
</template>

<script>
import store from "./../store";

export default {
  data() {
    return {
      chartOptions: {
        series: [
          {
            // data: store.getters.getSallary(store.state.personList), // when getter use personList directly
            data: store.getters.getSallary(store.state),
          },
        ],
      },
    };
  },
};
</script>


<style>
</style>