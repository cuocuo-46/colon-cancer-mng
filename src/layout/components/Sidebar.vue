<template>
  <el-aside class="sidebar-container">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#6BC8FF"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item v-for="(item,index) in menuList" :key="item.name" :index="`${index+1}`">
        <template #title>{{item.name}}</template>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Sidebar",
  setup() {
    const router = useRouter();
    const state = reactive({
      menuList: [
        {
          name: "病历库"
        },
        {
          name: "高级检索"
        },
        {
          name: "标签"
        },
        {
          name: "日历"
        },
        {
          name: "分析库"
        },
        {
          name: "意见反馈"
        }
      ]
    });
    router.afterEach(to => {
      if (to.path === "/medical-records/add") {
        state.menuList = [
          {
            name: "基本信息"
          },
          {
            name: "（结直肠癌）术前"
          },
          {
            name: "（结直肠癌）术中"
          },
          {
            name: "（结直肠癌）术后"
          }
        ];
      } else {
        state.menuList = [
          {
            name: "病历库"
          },
          {
            name: "高级检索"
          },
          {
            name: "标签"
          },
          {
            name: "日历"
          },
          {
            name: "分析库"
          },
          {
            name: "意见反馈"
          }
        ];
      }
    });
    const handleOpen = () => {};
    const handleClose = () => {};
    return {
      ...toRefs(state),
      handleOpen,
      handleClose
    };
  }
};
</script>
<style scoped lang="scss">
.sidebar-container {
  position: fixed;
  top: 154px;
  left: 0;
  width: 210px !important;
  height: 100%;
  background: #6bc8ff;
}
</style>