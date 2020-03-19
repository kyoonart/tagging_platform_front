<template>
<div>
    <el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <span>标注实体:</span> 
  <span class="content">2333</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
    <template>
  <el-table
    :data="entityTypes.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="id">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
</template>

<template slot-scope="scope">
    <el-button size="mini" type='success' @click="handleEdit(scope.$index, scope.row)">
    Add</el-button>
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
    created (){
            this.listEntityTypes();
        },
    data() {
        return {
            entityTypes: [],
            centerDialogVisible: false,
            search: ''
        }
    },
    methods:{
        handleEdit(index, row) {
            this.centerDialogVisible = true;
            console.log(index, row);
            
        },
        handleDelete(index, row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.delete(row.id);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        async listEntityTypes() {
            const resp= await this.$http.get('/Entity/ListType')
            if(resp.data.success){
                this.entityTypes = resp.data.data;
            }else{
                this.$message.error(resp.data.msg);
                console.log(resp.data);
            }
        },
        async delete(id) {
            let self = this;
            let post_data = { "id": id };
            const resp=await this.$http.post("/Entity/DelType", post_data); 
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
        },
    }
    

}
</script>

<style  scoped>

</style>

