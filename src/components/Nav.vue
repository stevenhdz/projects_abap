<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
    >
      <el-button style="float: right; width: 100%" v-if="isCollapse == true">
        <el-icon @click="isCollapse = false"><Fold /></el-icon>
      </el-button>
      <div v-else>
        <img
          src="https://lh3.googleusercontent.com/SnibzY0cYqybitUjQ32mfC1W5JipzXMYFbJFVgbe34KhwaCO-7FGZcON2vmm6cRr2rOV-qVCS6Gbb59Xf5_KgzniA-nSX9s6YLonGzs"
          alt=""
          style="max-width: 100%"
        />
        <el-button style="float: right; z-index: 999999; margin-top: -100px">
          <el-icon @click="isCollapse = true"><Fold /></el-icon>
        </el-button>
      </div>
      <br />
      <br />

      <el-menu-item index="1">
        <el-icon><icon-menu /></el-icon>
        <span><router-link to="/PacienteListar">Paciente</router-link></span>
      </el-menu-item>
      <el-menu-item index="2" disabled>
        <el-icon><document /></el-icon>
        <span><router-link to="/about">About</router-link></span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon><document /></el-icon>
        <span
          ><router-link to="/RespuestaGlosa">RespuestaGlosa</router-link></span
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  Fold,
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
export default {
  components: {
    Fold,
    Document,
    IconMenu,
    Location,
    Setting,
  },
  setup() {
    return {
      isCollapse: ref(true),
    };
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d83d8;
}

#nav a {
  font-weight: bold;
  color: #3280ce;
}

#nav a.router-link-exact-active {
  color: #365afc;
}
#nav {
  padding: 10%;
}
</style>
