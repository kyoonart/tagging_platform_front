<template>
<div>
    <el-button type="primary" class="btn" @click="handleChange('/entity')">Entity</el-button>
    <el-button type="primary" class="btn" @click="handleChange('/relation')">Realation</el-button>
    <el-button type="primary" class="btn" @click="handleChange('/sentence')">Sentence</el-button>
</div>
</template>
<script>
export default {
    components:{
    },

    methods: {
        handleChange(data) {
            this.$router.push(data)
        }
    }
}
</script>

<style scoped>
/* .btn {
    width: 120px;
    margin: 180px auto;
} */
</style>
