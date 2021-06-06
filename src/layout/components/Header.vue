<template>
  <el-header class="fixed inset-x-0 top-0">
    <!-- 头部-系统名称|用户信息 -->
    <section class="header flex justify-between items-center text-white">
      <div class="left">
        <span class="text-3xl">{{ name }}</span>
      </div>
      <div class="mt-9">联系我们：xxx@163.com</div>
      <div class="right">
        <el-popover placement="bottom" :width="320" trigger="hover" popper-class="popper-user-box">
          <template #reference>
            <div class="author ml-2 cursor-pointer">
              <i class="icon el-icon-s-custom text-lg mr-2" />
              {{ userInfo && userInfo.nickName || '' }}
              <i
                class="el-icon-caret-bottom"
              />
            </div>
          </template>
          <div class="nickname">
            <p>登录名：{{ userInfo && userInfo.loginUserName || '' }}</p>
            <p>昵称：{{ userInfo && userInfo.nickName || '' }}</p>
            <el-tag size="small" effect="dark" class="logout" @click="logout">退出</el-tag>
          </div>
        </el-popover>
      </div>
    </section>
    <!-- 面包屑 -->
    <section class="breadcrumb">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in breadcrumbList"
          :key="item.title"
          :to="item"
        >{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </section>
  </el-header>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    const state = reactive({
      name: "结直肠癌患者数据库",
      userInfo: {
        loginUserName: "账户名",
        nickName: "昵称"
      },
      hasBack: false,
      breadcrumbList: [
        {
          title: "首页",
          name: "MedicalRecords",
          path: "/home/medical-records"
        },
        {
          title: "病历库",
          name: "MedicalRecords",
          path: "/home/medical-records"
        }
      ]
    });
    onMounted(() => {});
    router.afterEach(to => {
      if (to.path === "/medical-records/add") {
        state.breadcrumbList = [
          {
            title: "首页",
            name: "MedicalRecords",
            path: "/medical-records/list"
          },
          {
            title: "病历库",
            name: "MedicalRecords",
            path: "/medical-records/list"
          },
          {
            title: "基本信息",
            name: to.name,
            path: to.fullPath
          }
        ];
      } else {
        state.breadcrumbList = [
          {
            title: "首页",
            name: "MedicalRecords",
            path: "/home/medical-records"
          },
          {
            title: "病历库",
            name: "MedicalRecords",
            path: "/home/medical-records"
          }
        ];
      }
    });
    // 操作-退出登录
    const logout = () => {};
    return {
      ...toRefs(state),
      logout
    };
  }
};
</script>

<style scoped lang="scss">
.el-header {
  background: #409eff;
  height: 150px !important;
  margin-bottom: 4px;
  padding: 0;
  z-index: 2000;
  .header {
    height: 100px;
    padding: 0 20px;
  }
  .breadcrumb {
    background: #6bc8ff;
    padding: 0 20px;
    height: 50px;
    .el-breadcrumb__item {
      line-height: 50px;
    }
  }
}
</style>
<style lang="scss">
/* 用户信息弹窗框 */
.popper-user-box {
  background: url("https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png")
    50% 50% no-repeat !important;
  background-size: cover !important;
  border-radius: 0 !important;
  .nickname {
    position: relative;
    color: #ffffff;
    .logout {
      position: absolute;
      right: 0;
      top: 0;
      cursor: pointer;
    }
  }
}
</style>