<template>
<div>
    <el-button type="primary" class="start btn" @click="handleChangex">开始打标</el-button>
  <el-button type="primary" class="view btn" @click="handleChangey">查看类型</el-button>
    <el-button type="primary" class="history btn" @click="handleChang">历史数据</el-button>
    <div class="box">
        <div class="box1">
            <div class="title">
                <span id="idTitle">ID</span>
                <h4 class="done">已打标的句子</h4>
            </div>
            <div>
                <ul>
                    <li v-for="sentence in sentencesDone" :key="sentence.kid">
                        <span class="id">{{sentence.id}}</span>
                        <span class="content">{{sentence.content}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="box2">
            <div class="title">
                <span id="idTitle">ID</span>
                <h4 class="undone">未打标的句子</h4>
            </div>
            <div>
                <ul>
                    <li v-for="sentence in sentencesDoing" :key="sentence.kid">
                        <span class="id">{{sentence.id}}</span>
                        <span class="content">{{sentence.content}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>
</template>

<script>
export default {
    data(){
            return {
                sentencesDoing: [],
                sentencesDone: [],
            }
        },
    created(){
        this.listEntitySentencesDone();
        this.listEntitySentencesDoing();
    },
    methods: {
        handleChang() {
            this.$router.push('/entityHistory')
        },
        handleChangex() {
            this.$router.push('/taggingEntity')
        },
        handleChangey(){
             this.$router.push('/entityType')
        },
        async listEntitySentencesDoing(){
            let post_data = { referer: 'entity', page: 0, limit: 10 };
            const resp = await this.$http.post('/Sentence/Doing',post_data)
            if(resp.data.success){
                this.sentencesDoing = resp.data.data;
            }else{
                this.$message.error(resp.data.msg);
                console.log(resp.data);
            }
        },
        async listEntitySentencesDone(){
            let post_data = { referer: 'entity', page: 0, limit: 10 };
            const resp= await this.$http.post('/Sentence/Done',post_data)
            if(resp.data.success){
                this.sentencesDone = resp.data.data;
            }else{
                console.log(resp.data);
                this.$message.error(resp.data.msg);
            }
            },
    }
}
</script>

<style scoped>
.btn {
    width: 120px;
}

.start {
    position: relative;
    /* top: -180px; */
    left: -240px
}
.view{
    position: relative;
    left: -20px
}
.history {
    position: relative;
    /* top: -180px; */
    right: -240px
}
.title{
    margin-top: -10px
}
.box1,
.box2 {
    margin-top: 20px;
    border: 1px solid #ccc;
    background-color: #ffffff;
    /* margin-right: 20px */
}

ul li .id {
    flex: 1;
    display: inline-block;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
}

ul li:nth-child(1) {
    border-top: 1px solid #ccc;
}
.box1 #idTitle,
.box2 #idTitle {
    position: relative;
    left: -430px
}

ul li .content {
    flex: 10
}

.box {
    width: 80%;
    margin: 0 auto;
}

.box .done {
    color: green;
    /* line-height: 40px; */
    display: inline-block;
}

ul {
    margin-top: -20px;
    margin-left: -40px
}

ul li {
    list-style: none;
    line-height: 30px;
    border-bottom: 1px solid #ccc;
    display: flex;
}

.box2 .undone {
    color: red;
    /* line-height: 40px; */
    display: inline-block
}
</style>

