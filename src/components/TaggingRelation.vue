<template>
<div>
    <div class="box1">{{sentence}}</div>
    <div class="box2">
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="entityTypes[0]" size="small">
      <el-checkbox-button v-for="type in entityTypes" :label="type"  
      :key="type.id">{{type.name}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
    </div>
    <div class="btn">
        <el-button type="primary" round>save</el-button>
        <el-button type="primary" round>next</el-button>
    </div>
</div>
</template>
<script>
  export default {
    data () {
      return {
        entityTypes : [],
        sentence : '',
      };
    },
    created (){
      this.getSentence();
      this.listEntityTypes();
    },
    methods:{
      async listEntityTypes() {
        const resp= await this.$http.get('/Entity/ListType')
        if(resp.data.success){
          this.entityTypes = resp.data.data;
        }else{
          console.log(resp.data);
          this.$message.error(resp.data.msg);
        }
      },
     async getSentence(){
        let post_data = {referer:"entity"};
        const resp =await this.$http.post('/Sentence/Get',post_data)
            if(resp.data.success){
              this.sentence = resp.data.data[0].content;
            }else{
              console.log(resp.data);
              this.$message.error(resp.data.msg);
            }
      }
    }
  }
</script>
<style scoped>
.box1 {
    width: 80%;
    height: 150px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 0 auto
}

.box2 {
    width: 80%;
    height: 200px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 10px auto
}
</style>
