<template>
<div>
    <div class="box1">233</div>
    <div class="box2">
  <div style="margin-top: 20px">
    <el-checkbox-group v-model="checkboxGroup3" size="small">
      <el-checkbox-button v-for="city in cities" :label="city"  :key="city">{{city}}</el-checkbox-button>
    </el-checkbox-group>
  </div>
    </div>
    <div class="btn">
        <el-button type="primary" round>apply</el-button>
        <el-button type="primary" round>save</el-button>
        <el-button type="primary" round>next</el-button>
       
    </div>
</div>
</template>
<script>
  const cityOptions = ['shangahi', 'beijing', 'gaunzgzhou', 'shenzhen'];
  export default {
    data () {
      return {
        checkboxGroup1: ['shanghai'],
        checkboxGroup2: ['shanghai'],
        checkboxGroup3: ['shanghai'],
        checkboxGroup4: ['shanghai'],
        cities: cityOptions
      };
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
