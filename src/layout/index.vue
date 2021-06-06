<template>
  <div>
    <Header />
    <Sidebar />
    <el-main class="app-main">
      <router-view />
    </el-main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Header,
    Sidebar
  },
  name: "Layout",
  setup() {
    const router = useRouter();
    const state = reactive({});
    return {
      ...toRefs(state)
    };
  }
};
</script>



<style scoped lang="scss">
.app-main {
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  box-sizing: border-box;
  padding-left: 240px;
  padding-right: 30px;
  padding-top: 154px;
}
</style>