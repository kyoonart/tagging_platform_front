<template>
<div>
    <el-dialog title="提示" :visible.sync="centerDialogVisible" width="30%" center>
        <span>标注实体:</span>
        <span class="content">2333</span>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
    </el-dialog>
    <template>
  <el-table
    :data="entities.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Content"
      prop="sen_content">
    </el-table-column>
     <el-table-column
      label="头实体"
      prop="head_entity">
    </el-table-column>
    <el-table-column
      label="尾实体"
      prop="tail_entity">
    </el-table-column>
     <el-table-column
      label="关系类型"
      prop="type">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
</template>

<template slot-scope="scope">
<el-button size="mini" type='primary' @click="handleEdit(scope.$index, scope.row)">
    Edit</el-button>
<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
</template>
    </el-table-column>
  </el-table>
</template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            entities: [],
            centerDialogVisible: false,
            search: ''
        }
    },
    created() {
        this.list();
    },
    methods: {
        handleEdit(index, row) {
            this.centerDialogVisible = true;
            console.log(index, row);
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该标记, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delete(row.id);
                this.$message({
                    type: 'success',
                    message: "删除成功"
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },

        async list() {
            let post_data = { page: 0, limit: 10 };
            const resp = await this.$http.post("/Relation/List", post_data)
            if (resp.data.success) {
                this.entities = resp.data.data;
                //{"id": 19, "sentence_id_id": 2, "pos": "3,8", "entity": "asdfasddddddfsadf", "type_id": 11}
            } else {
                console.log(resp.data);
                this.$message.error(resp.data.msg);
            }
        },
        async  delete(id) {
            let self = this;
            let post_data = { "id": id };
            const resp=await this.$http.post("/Relation/Del", post_data); 
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
            this.list();
        },
    }

}
</script>

<style scoped>

</style>

