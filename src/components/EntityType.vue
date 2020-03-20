<template>
<div>
    <!-- 添加弹框 -->
    <el-dialog title="请输入需要添加的内容" :visible.sync="addDialogVisible" width="30%" center>
        <el-form :label-position="labelPosition" :rules="addRules" ref="addFormRef" label-width="80px" :model="formLabelAlign">

            <el-form-item label="Name" prop='name'>
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="addDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click='addFinish'>确 定</el-button>
  </span>
    </el-dialog>

    <!-- 编辑弹框 -->
    <el-dialog title="请修改" :visible.sync="centerDialogVisible" width="30%" center>
        <el-form :label-position="labelPosition" label-width="80px" :model="editformLabelAlign">
            <!-- <el-form-item label="ID">
                <el-input v-model="editformLabelAlign.id"></el-input>
            </el-form-item> -->
            <el-form-item label="Name">
                <el-input v-model="editformLabelAlign.name"></el-input>
            </el-form-item>
        </el-form>
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
    <el-button class="addBtn" size="mini" type='success' @click="handleAdd">
    Add</el-button>
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
    created() {
        this.listEntityTypes();
    },
    data() {
        return {
            entityTypes: [],
            centerDialogVisible: false,
            search: '',
            addDialogVisible: false,
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                region: '',

            },
            editformLabelAlign: {
                // id: '',
                name: '',
                region: '',
            },
            addForm: {
                name: '',

            },
            addRules: {
                name: [{ required: true, message: '请输入Name,必须是字母', trigger: 'blur' },
                    { min: 0, max: 10, message: '长度在 0到 10个字母', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleEdit(index, row) {
            this.centerDialogVisible = true;
            // this.editformLabelAlign.id = row.id
            this.editformLabelAlign.name = row.name
            // 处理Edit逻辑
              this.listEntityTypes()
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
            this.delete(row.id)
        },
        handleAdd() {
            this.addDialogVisible = true
        },
        addFinish() {
            this.$refs.addFormRef.validate((valid) => {
                if (!valid) { return }
                // 表单验证成功
                this.addDialogVisible = false
                // 刷新列表
                this.listEntityTypes()
                //  to do 调用添加事件函数
                this.$message.success('添加成功');
                this.$refs.addFormRef.resetFields();
            })
        },
        async listEntityTypes() {
            const resp = await this.$http.get('/Entity/ListType')
            if (resp.data.success) {
                this.entityTypes = resp.data.data;
            } else {
                this.$message.error(resp.data.msg);
                console.log(resp.data);
            }
        },
        async delete(id) {
            let self = this;
            let post_data = { "id": id };
            const resp = await this.$http.post("/Entity/DelType", post_data);
            this.listEntityTypes()
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
        },
    }


}
</script>

<style scoped>
.addBtn {
    width: 100px;
    margin-right: 20px
}
</style>

