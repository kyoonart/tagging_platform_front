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
        <el-form :label-position="labelPosition" :rules="addRules" ref="addFormRef" label-width="80px" :model="formLabelAlign">
            <!-- <el-form-item label="ID">
                <el-input v-model="editformLabelAlign.id"></el-input>
            </el-form-item> -->
            <el-form-item label="Name">
                <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click='editFinish'>确 定</el-button>
  </span>
    </el-dialog>
    <template>
  <el-table
    :data="relationTypes.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
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
        this.listRelationTypes();
    },
    data() {
        return {
            relationTypes: [],
            centerDialogVisible: false,
            search: '',
            addDialogVisible: false,
            labelPosition: 'right',
            formLabelAlign: {
                name: '',
                id: '',

            },
            addForm: {
                name: '',
            },
            addRules: {
                name: [{ required: true, message: '请输入Name,必须是字母', trigger: 'blur' },
                    { min: 0, max: 100, message: '长度在 0到 100个字母', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        handleEdit(index, row) {
            this.centerDialogVisible = true;
            this.formLabelAlign.name = row.name;
            this.formLabelAlign.id = row.id;
        },
        editFinish() {
            this.$refs.addFormRef.validate((valid) => {
                if (!valid) { return }
                // 表单验证成功
                this.centerDialogVisible = false

                // invoke edit 
                this.edit(this.formLabelAlign.id, this.formLabelAlign.name);
                this.$message.success('修改成功');
                this.$refs.addFormRef.resetFields();
            })
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
        handleAdd() {
            this.addDialogVisible = true
        },
        addFinish() {
            this.$refs.addFormRef.validate((valid) => {
                if (!valid) { return }
                // 表单验证成功
                this.addDialogVisible = false

                console.log(this.formLabelAlign.name);
                // invoke add 
                this.add(this.formLabelAlign.name);

                //  to do 调用添加事件函数
                this.$message.success('添加成功');
                this.$refs.addFormRef.resetFields();
            })
        },
        async listRelationTypes() {
            const resp = await this.$http.get('/Relation/ListType')
            if (resp.data.success) {
                this.relationTypes = resp.data.data;
            } else {
                this.$message.error(resp.data.msg);
                console.log(resp.data);
            }
        },
        async delete(id) {
            let self = this;
            let post_data = { "id": id };
            const resp = await this.$http.post("/Relation/DelType", post_data);
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
            this.listRelationTypes();
        },
        async add(name) {
            let self = this;
            let post_data = { "type": name };
            const resp = await this.$http.post("/Relation/AddType", post_data);
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
            // 刷新列表
            this.listRelationTypes()
        },
        async edit(id, name) {
            let post_data = { 'id': id, 'type': name };
            const resp = await this.$http.post("/Relation/EditType", post_data);
            if (!resp.data.success) {
                this.$message.error(resp.data.msg);
            }
            // 刷新列表
            this.listRelationTypes()
        }
    }


}
</script>

<style scoped>
.addBtn {
    width: 100px;
    margin-right: 20px
}
</style>

