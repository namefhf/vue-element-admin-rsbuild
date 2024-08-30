<template>
  <div class="app-container">admin dashboard</div>
</template>

<script>
export default {
  name: "DashboardAdmin",
  components: {},
  data() {
    return {};
  },
  methods: {
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type];
    },
  },
};
</script>

<style lang="scss" scoped></style>
