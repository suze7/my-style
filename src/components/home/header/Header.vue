<template>
  <div class="comp-header">
    <div class="pub-flex-fwidth my-logo">
      <img :src="headerLoge" />这是logo
    </div>
    <div class="pub-flex-awidth">
      <el-menu class="pube-menu" mode="horizontal" :default-active="activeIndex2">
        <template v-for="menu of menuList">
          <el-menu-item :index="menu.id" v-if="!menu.children" :key="menu.id"><i :class="menu.icon"></i>{{menu.name}}</el-menu-item>
          <el-submenu :index="menu.id" popper-class="pube-menu-popup" v-else :key="menu.id">
            <template slot="title"><i :class="menu.icon"></i>{{menu.name}}</template>
            <el-menu-item v-for="m of menu.children" :index="m.id" :key="m.id">{{m.name}}</el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </div>
    <div class="pub-flex-fwidth">
      <div style="width:100px"></div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/image/logo.png";
export default {
  name: "Header",
  data: function() {
    return {
      headerLoge: logo,
      activeIndex2: "1",
      menuList: [
        {
          id: "1",
          name: "布局11111111111",
          url: "",
          icon: "el-icon-platform-eleme",
          children: null
        },
        {
          id: "2",
          name: "element-ui",
          url: "",
          icon: "el-icon-platform-eleme",
          children: [
            {
              id: "2-1",
              name: "导航菜单",
              url: "",
              children: null
            },
            {
              id: "2-2",
              name: "导航菜单",
              url: "",
              children: null
            },
            {
              id: "2-3",
              name: "导航菜单",
              url: "",
              children: null
            },
            {
              id: "2-4",
              name: "导航菜单",
              url: "",
              children: null
            }
          ]
        },
        {
          id: "3",
          name: "element-ui1",
          url: "",
          icon: "el-icon-platform-eleme",
          children: [
            {
              id: "3-1",
              name: "导航菜单1",
              url: "",
              children: null
            }
          ]
        }
        // {
        //   id: "4",
        //   name: "布局11111111111",
        //   url: "",
        //   children: null
        // },
        // {
        //   id: "5",
        //   name: "布局11111111111",
        //   url: "",
        //   children: null
        // },
        // {
        //   id: "6",
        //   name: "布局11111111111",
        //   url: "",
        //   children: null
        // },
        // {
        //   id: "7",
        //   name: "布局11111111111",
        //   url: "",
        //   children: null
        // },
        // {
        //   id: "8",
        //   name: "布局11111111111",
        //   url: "",
        //   children: null
        // },
      ]
    };
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>