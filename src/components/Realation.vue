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
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <el-table-column
      label="ID"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Content"
      prop="name">
    </el-table-column>
     <el-table-column
      label="标注实体"
      prop="date">
    </el-table-column>
     <el-table-column
      label="实体类型"
      prop="date">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header">
</template>

<template slot-scope="scope">
<el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
    Edit</el-button>
<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
</template>
    </el-table-column>
  </el-table>
</template>

    </div>
</template>

<script>
import func from '../../vue-temp/vue-editor-bridge';
export default {
    data() {
        return {
            entities: [],
            centerDialogVisible: false,
            tableData: [{
                    date: '2016-05-02',
                    name: '王小虎上海市普陀区金沙江路',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            search: ''
        }
    },
    methods: {
        handleEdit(index, row) {
            this.centerDialogVisible=true;
            console.log(index, row);
        },
        handleDelete(index,row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // todo 这里调用删除逻辑、
                // delete();
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
        list(){
            let self = this;
            let post_data = {page:0,limit:10};
            this.$http.post("/Entity/List",post_data)
                .catch(function (error) {
                    //todo: 错误处理
                    console.log(error);
                })
                .then(function (resp) {
                    if(resp.data.success){
                        self.entities = resp.data.data;

                        //{"id": 19, "sentence_id_id": 2, "pos": "3,8", "entity": "asdfasddddddfsadf", "type_id": 11}
                    }else{
                        //todo: 错误处理
                        console.log(resp.data.msg)
                    }
                })
        },
        delete(id){
            let self = this;
            let post_data = {"id":id};
            this.$http.post("/entity/DelType",post_data)
                .catch(function (error) {
                    //todo: 错误处理
                    console.log(error);
                })
                .then(function (resp) {
                    if(resp.data.success){
                        // 删除成功
                        // {"success": true, "msg": "Delete entity type success!", "code": 0, "data": ""}
                    }else{
                        //todo: 错误处理
                        console.log(resp.data.msg)
                    }
                })
        },
        //edit接口需要输入的内容如下
        // {"tag_id":19,"sentence_id":2,"pos":"3,8","entity":"asdfasddddddfsadf","type":11}
        // 就是list接口获得的内容，启动tag_id 对应list接口的响应数据的id。type对应type_id。
        edit(tag_id,sentence_id,pos,entity,type){
            let self = this;
            let post_data = {"tag_id":tag_id,"sentence_id":sentence_id,"pos":pos,"entity":entity,"type":type};
            this.$http.post("/entity/Save",post_data)
                .catch(function (error) {
                    //todo:...
                })
                .then(function (resp) {
                    // todo:...
                })
        }
    }

}
</script>

<style lang="less" scoped>

</style>

