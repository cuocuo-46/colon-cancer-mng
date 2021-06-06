<template>
  <section class="medical-records">
    <div class="header mt-5 mb-7 flex">
      <div class="border p-1 w-max mr-2">
        患者人数：
        <span class="text-red-500">{{tableData.length}}</span>人
      </div>
      <div class="border p-1 w-max cursor-pointer" @click="navDetail">
        <img class="h-6 w-6" src="../../assets/add.png" alt="ChitChat Logo" />
      </div>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="PID" label="PID" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" align="center"></el-table-column>
      <el-table-column prop="illAge" label="首次确诊年龄" align="center"></el-table-column>
      <el-table-column prop="sexStr" label="性别" align="center"></el-table-column>

      <el-table-column prop="address" label="操作" align="center">
        <template #default="scope">
          <el-button @click="navDetail(scope.row,false)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="navDetail(scope.row,true)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </section>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "MedicalRecords",
  setup() {
    const router = useRouter();
    const state = reactive({
      tableData: [
        {
          id: 1,
          PID: "121133",
          name: "张三",
          illAge: 45,
          sexStr: "男"
        },
        {
          id: 2,
          PID: "121134",
          name: "李四",
          illAge: 50,
          sexStr: "男"
        },
        {
          id: 3,
          PID: "121135",
          name: "王小芳",
          illAge: 43,
          sexStr: "女"
        },
        {
          id: 4,
          PID: "121136",
          name: "赵一",
          illAge: 58,
          sexStr: "男"
        }
      ]
    });
    onMounted(() => {});
    const navDetail = (row,editFlag) => {
      router.push({
        name: "AddRecord",
        query: {id: row.id,editFlag: editFlag}
      });
    };

    return {
      ...toRefs(state),
      navDetail
    };
  }
};
</script>

<style>
.medical-records {
  width: 100%;
}
</style>

<style lang="scss">
.el-table {
  th {
    background: #eee;

    color: #333;
  }
}
</style>