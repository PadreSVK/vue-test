<template>
    <div>
        <highcharts class="hc" :options="chartOptions" ref="chart">
<option></option>

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
                        // data: store.getters.getData.map(function(x) { x.sallary })
                        data: store.getters.getSallary
                    }
                ]
            }
        }
    }
}
</script>


<style>

</style>