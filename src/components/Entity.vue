<template>
<div>
    <el-button type="primary" class="start btn" @click="handleChangex">开始打标</el-button>
    <el-button type="primary" class="history btn" @click="handleChang">历史数据</el-button>
    <div class="box">
        <div class="box1">
            <span class="done">已打标的句子</span>
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
        <div class="box2">
            <span class="undone">未打标的句子</span>
            <div>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    </div>

</div>
</template>
<script>
export default {
 methods:{
     handleChang(){
         this.$router.push('/realation')
     },
     handleChangex(){
         this.$router.push('/select')
     }
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

.box {
    display: flex;
    margin-top: 20px;
   
}

.box1,
.box2 {
    flex: 1;
    border: 1px solid #ccc;
     background-color: #ffffff

}
.box1{
margin-right: 20px
}
.box ul {
    margin: 0;
    padding: 0;
}

.box .done {
    color: green;
    line-height: 40px
}

ul li {
    list-style: none;
    line-height: 30px;
    border-bottom: 1px solid #ccc
}
.box2 .undone {
    color: red;
    line-height: 40px
}
</style>

