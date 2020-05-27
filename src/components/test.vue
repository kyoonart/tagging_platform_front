<template>
  <div>
    <test :cancelHandler="cancelHandler"></test>
  </div>
</template>

<script>
import Test from './test1.vue'
  export default {
    components:{
      test:Test
    },
    data(){
      return {
        cancelHandler:()=>{
          console.log(233);
console.log('为什么不可以呢 我icoa');
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>