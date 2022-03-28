<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" class="nav">
        <NAV></NAV>
      </el-aside>
      <el-container>
        <el-header
          class="head"
          width="100%"
          height="12%"
          style="background-color: white; color: black"
        >
          <HEAD></HEAD>
        </el-header>
        <el-main class="main">
          <el-card class="box-card">
            <router-view />
          </el-card>
        </el-main>
        <!-- <el-footer
          style="background-color: whitesmoke; color: black; padding: 2px"
          ><h1>Copyright 2021</h1></el-footer
        >-->
      </el-container>
    </el-container>
  </div>
</template>
<script>
import NAV from "../src/components/Nav.vue";
import HEAD from "../src/components/Head.vue";
export default {
  components: {
    NAV,
    HEAD,
  },
};
</script>

<style lang="css">
.head {
  background-color: white;
}
.nav {
  background-color: white;
}
.main {
  background-color: white;
}
</style>
