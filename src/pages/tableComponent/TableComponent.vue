<template>
  <div>
    <p>混入与组件，页面上有多个需要该功能的存在时混入不一定适用，用组件不会有这个问题。</p>
    <MyTable
      class="my-table"
      defaultPageSize="1"
      :pageSizeList="[10,20,30]"
      @setTable="getTableData"
    >
      <template v-slot:default="myData">
        <el-table class="pube-table" :data="tableData">
          <el-table-column type="index" :index="myData.formatterIndex"></el-table-column>
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "@/components/myFunctionComponent/myTable/MyTable";

export default {
  components: {
    MyTable
  },
  data() {
    return {
      tableData: [],
      params: {}
    };
  },
  mounted() {
    this.getTableData();
  },
  methods: {
    getTableData() {
      let data = [{name: '杀杀杀sss122杀杀杀sss122杀杀杀sss122杀杀杀sss122'}, {}, {}, {}, {}];
      return new Promise(() => {
        this.tableData = data;
      });
    }
  }
};
</script>

<style>
</style>