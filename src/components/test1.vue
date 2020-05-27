<template>
<div>
    <el-button type="primary" round @click='handleSave'>save</el-button>
    <el-button type="primary" round @click="getSentence">next</el-button>
    <el-button type="primary" round @click="cancelHandler">next</el-button>
</div>
</template>

<script>
export default {
props: {
  cancelHandler: {
    type: Function
  },
},
}
</script>

<style lang="scss" scoped>

</style>