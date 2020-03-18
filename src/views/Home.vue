<template>
<div>
    <el-container class="container">
        <el-header>Header</el-header>
        <el-main>
            <router-view></router-view>
          </el-main>
        
    </el-container>
</div>
</template>

<script>
export default {
  
}
</script>

<style>
.container {
    width: 90%;
    height: 700px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto
}

.el-header,
.el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    /* line-height: 400px; */
}
</style>
