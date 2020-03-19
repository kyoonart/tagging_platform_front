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
      label="标注实体"
      prop="entity">
    </el-table-column>
     <el-table-column
      label="实体类型"
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
                // todo 这里调用删除逻辑、
                // console.log(row.id);
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
            const resp = await this.$http.post("/Entity/List", post_data)
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
            const resp=await this.$http.post("/Entity/Del", post_data); 
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
        },
        //edit接口需要输入的内容如下 tag的edit接口
        // {"tag_id":19,"sentence_id":2,"pos":"3,8","entity":"asdfasddddddfsadf","type":11}
        // 就是list接口获得的内容，启动tag_id 对应list接口的响应数据的id。type对应type_id。
        edit(tag_id, sentence_id, pos, entity, type) {
            let self = this;
            let post_data = { "tag_id": tag_id, "sentence_id": sentence_id, "pos": pos, "entity": entity, "type": type };
            this.$http.post("/entity/Save", post_data)
                .catch(function(error) {
                    //todo:...
                })
                .then(function(resp) {
                    // todo:...
                })
        }
    }

}
</script>

<style scoped>

</style>

