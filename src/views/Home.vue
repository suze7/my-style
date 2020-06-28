<template>
  <el-container>
    <!-- <el-header :height="headerHeight">Header</el-header>
    <el-container>
      <el-aside :width="leftWidth">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container> -->
  </el-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: function() {
    return {
      headerHeight: "80px",
      leftWidth: "200px"
    };
  }
};
</script>
