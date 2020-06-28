<template>
  <div>
    <slot v-bind:formatterIndex="formatterIndex"></slot>
    <el-pagination
      :page-sizes="pageSizeList"
      :page-size.sync="pageSize"
      :current-page.sync="currentPage"
      background
      :layout="layout"
      :total="1000"
      @size-change="getData"
      @current-change="getData"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pageSizeList: {
      default: () => [10, 20, 30]
    },
    defaultPageSize: {
      default: 0
    },
    layout: {
      default: "sizes, prev, pager, next"
    }
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10
    };
  },
  watch: {
    pageSizeList() {
      this.pageSize = this.pageSizeList[this.defaultPageSize];
    },
  },
  mounted() {},
  methods: {
    getData() {
      this.$emit('setTable');
    },
    formatterIndex(index) {
      return 1 + this.pageSize * (this.currentPage - 1) + index;
    },
  }
};
</script>

<style>
</style>