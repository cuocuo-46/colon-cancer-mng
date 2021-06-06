<template>
  <el-form label-position="right" label-width="120px" :model="recordForm" width="100%" class="my-4">
    <el-row>
      <el-col :span="12">
        <el-form-item label="姓名：">
          <el-input v-model="recordForm.name" class="w-10" style="width: 160px" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="科别(病区)：">
          <el-input v-model="recordForm.medicalCategory" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="住院号：">
          <el-input v-model="recordForm.admissionNo" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="病号：">
          <el-input v-model="recordForm.bedNo" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="身份证：">
          <el-input v-model="recordForm.certNo" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="性别：">
          <!-- <el-input v-model="recordForm.region" /> -->
          <el-radio v-model="recordForm.sex" :label="1">男</el-radio>
          <el-radio v-model="recordForm.sex" :label="2">女</el-radio>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row class="relative">
      <el-col :span="12">
        <el-form-item label="首次确诊时间：">
          <el-input v-model="recordForm.firstConfirmTime" />
        </el-form-item>
      </el-col>
      <el-col :span="12" class="absolute -right-4 top-8">
        <section class="contact-form border relative">
          <p class="absolute text-red-500 -top-3 w-20 bg-white text-center ml-4">联系方式</p>
          <el-form
            :model="recordForm.contachtForm"
            label-width="100px"
            width="100%"
            class="p-5 pb-0 pl-0"
          >
            <el-row>
              <el-col :span="10">
                <el-form-item label="手机：">
                  <el-input v-model="recordForm.contachtForm.phoneNo" class="w-10" />
                </el-form-item>
              </el-col>
              <el-col :span="14">
                <el-form-item label="固定电话：">
                  <el-input v-model="recordForm.contachtForm.fixPhoneNo" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="通讯地址：">
                  <el-input
                    v-model="recordForm.contachtForm.address"
                    class="w-10"
                    style="width: 160px"
                  />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="联络人1：">
                  <el-input v-model="recordForm.contachtForm.contacter1" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="24">
                <el-form-item label="联络人2：">
                  <el-input v-model="recordForm.contachtForm.contacter2" />
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </section>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="首次确诊年龄:">
          <el-input v-model="recordForm.firstConfirmAge" />
        </el-form-item>
      </el-col>
    </el-row>
    <button
      class="w-20 h-8 rounded-lg text-center bg-yellow-500 text-white m-5"
      @click="onConfirm"
    >{{btnName}}</button>
  </el-form>
</template>

<script>
import { onMounted, reactive, toRefs, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "AddRecord",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const btnName = computed(() => {
      if (state.editFlag == "true") {
        return "修 改";
      }
      if (state.editFlag == "false") {
        return "返 回";
      }
      if (state.editFlag == undefined) {
        return "添 加";
      }
    });
    const { id, editFlag } = route.query;
    const state = reactive({
      activePatientId: id,
      editFlag,
      recordForm: {
        name: "",
        medicalCategory: "",
        admissionNo: "",
        bedNo: "",
        certNo: "",
        sex: "",
        firstConfirmTime: "",
        firstConfirmAge: "",
        contachtForm: {
          phoneNo: "",
          fixPhoneNo: "",
          address: "",
          contacters: [
            {
              name: "",
              phoneNo: ""
            },
            {
              name: "",
              phoneNo: ""
            }
          ]
        }
      },
      tableData: [
        {
          id: 1,
          PID: "121133",
          name: "张三",
          firstConfirmAge: 45,
          sexStr: "男",
          sex: 1,
          contachtForm: {}
        },
        {
          id: 2,
          PID: "121134",
          name: "李四",
          firstConfirmAge: 50,
          sexStr: "男",
          sex: 1,
          contachtForm: {}
        },
        {
          id: 3,
          PID: "121135",
          name: "王小芳",
          firstConfirmAge: 43,
          sexStr: "女",
          sex: 2,
          contachtForm: {}
        },
        {
          id: 4,
          PID: "121136",
          name: "赵一",
          firstConfirmAge: 58,
          sexStr: "男",
          contachtForm: {}
        }
      ]
    });
    onMounted(() => {
      if (state.activePatientId > 0) {
        getDetail();
      }
    });

    const getDetail = () => {
      state.recordForm = state.tableData.find(
        item => item.id == state.activePatientId
      );
    };
    const onConfirm = () => {
      if(btnName.value === '返 回') {
        router.back();
      }
    };

    return {
      ...toRefs(state),
      btnName,
      onConfirm,
      getDetail
    };
  }
};
</script>

<style lang="scss" scoped>
.el-col {
  padding-right: 40px;
}
</style>