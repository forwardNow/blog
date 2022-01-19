<template>
  <div id="app">
    <hui-curd-card>
      <hui-criteria-queries></hui-criteria-queries>
      <hui-operate-buttons></hui-operate-buttons>
      <hui-data-table></hui-data-table>
      <hui-pagination></hui-pagination>
    </hui-curd-card>
  </div>
</template>
<script>
import HuiCurdCard from './cards/CrudCard.vue';
import HuiDataTable from './cards/DataTable.vue';
import HuiOperateButtons from './cards/OperateButtons.vue';
import HuiPagination from './cards/Pagination.vue';
import HuiCriteriaQueries from './cards/CriteriaQueries.vue';

export default {
  components: {
    HuiCurdCard,
    HuiDataTable,
    HuiOperateButtons,
    HuiPagination,
    HuiCriteriaQueries,
  },
  data() {
    return {
    };
  },
}
</script>
<style>
.ww-graph {
  width: 800px;
  height: 600px;

  margin: 40px;
}
</style>
