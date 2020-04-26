<template>
<div>
    <p>全部句子数：{{all_num.all}} ，完成打标句子数：{{all_num.done}}，未完成打标句子数：{{all_num.doing}} </p>
    <p>全部实体打标数：{{entity_num.all}} ，完成打标句子数：{{entity_num.done}}，未完成打标句子数：{{entity_num.doing}} </p>
    <p>全部关系打标数：{{relation_num.all}} ，完成打标句子数：{{relation_num.done}}，未完成打标句子数：{{relation_num.doing}} </p>
    <template>
    <el-table
        :data="sentences.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
        label="ID"
        prop="id">
        </el-table-column>
        <el-table-column
        label="内容"
        prop="content">
        </el-table-column>
        <el-table-column
        label="来源"
        prop="source">
        </el-table-column>
        <el-table-column
        label="实体标注"
        prop="entity_tag">
        </el-table-column>
        <el-table-column
        label="关系标注"
        prop="relation_tag">
        </el-table-column>
        <el-table-column
        align="right">
    <template slot="header">
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
            sentences: [],
            search: '',
            entity_num:{
                doing:0,
                done:0,
                all:0
            },
            relation_num: {
                doing:0,
                done:0,
                all:0
            },
            all_num:{
                doing:0,
                done:0,
                all:0
            }
        }
    },
    created() {
        this.list();
        this.allCount();
        this.entityCount();
        this.relationCount();
    },
    methods: {
        async list() {
            let post_data = { page: 0, limit: 20 };
            const resp = await this.$http.post("/Sentence/List", post_data)
            if (resp.data.success) {
                this.sentences = resp.data.data;
                this.processBool();
            } else {
                this.$message.error(resp.data.msg);
            }
        },
        processBool(){
            let sentences = this.sentences;
            sentences.forEach(element => {
                if(element.entity_tag){
                    element.entity_tag = 1;
                }else{
                    element.entity_tag = 0;
                }

                if(element.relation_tag){
                    element.relation_tag = 1;
                }else{
                    element.relation_tag = 0;
                }
            });
            this.sentences = sentences;
        },
        async allCount(){
            let all_post_data = {referer:"all"};
            const resp = await this.$http.post("/Sentence/Count", all_post_data)
            if (resp.data.success) {
                this.all_num.doing = resp.data.data.doing_num;
                this.all_num.done = resp.data.data.done_num;
                this.all_num.all = this.all_num.doing + this.all_num.done;
            } else {
                this.$message.error(resp.data.msg);
            }
        },
        async entityCount(){
            let entity_post_data = {referer:"entity"};
            const resp = await this.$http.post("/Sentence/Count", entity_post_data)
            if (resp.data.success) {
                this.entity_num.doing = resp.data.data.doing_num;
                this.entity_num.done = resp.data.data.done_num;
                this.entity_num.all = this.entity_num.doing + this.entity_num.done;
            } else {
                this.$message.error(resp.data.msg);
            }
        },
        async relationCount(){
            let relation_post_data = {referer:"relation"};
            const resp = await this.$http.post("/Sentence/Count", relation_post_data)
            if (resp.data.success) {
                this.relation_num.doing = resp.data.data.doing_num;
                this.relation_num.done = resp.data.data.done_num;
                this.relation_num.all = this.relation_num.doing + this.relation_num.done;
            } else {
                this.$message.error(resp.data.msg);
            }
        }


    }

}
</script>

<style scoped>

</style>

