<template>
<div>
    <el-button type="primary" class="start btn" @click="handleChangex">开始打标</el-button>
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
            this.$router.push('/realation')
        },
        handleChangex() {
            this.$router.push('/select')
        },
      async listEntitySentencesDoing(){
            // let self = this;
            let post_data = { referer: 'entity', page: 0, limit: 10 };
            const resp = await this.$http.post('/Sentence/Doing',post_data)
                // .catch(function (error){
                //     // todo: 是否需要封装错误处理逻辑？ 弹一个框或者什么方式提示一下错误？
                //     // ok solve
                //      this.$message.error('出现错误了,请重试');
                //     consle.log(error);
                // })
                // .then(function (resp){
         if(resp.data.success){
            this.sentencesDoing = resp.data.data;
                    }else{
                        // todo :错误处理
                        // ok solved
                        //  this.$message.error('resp.data.msg');
                        console.log(resp.data.msg)
                         this.$message.error('resp.data.msg')
                    }
                // })
        },
       async listEntitySentencesDone(){
            // let self = this;
            let post_data = { referer: 'entity', page: 0, limit: 10 };
              const resp= await this.$http.post('/Sentence/Done',post_data)
                // .catch(function (error){
                //     // todo: 是否需要封装错误处理逻辑？弹一个框或者什么方式提示一下错误？
                //     this.$message.error('出现错误了,请重试')
                //     consle.log(error);
                // })
                // .then(function (resp){
                    if(resp.data.success){
                        //   console.log(resp.data.msg)
                        this.sentencesDone = resp.data.data;
                    }else{
                       this.$message.error('出现错误了,请重试')
                    }
                // })
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

