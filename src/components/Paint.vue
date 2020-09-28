<template>
  <div>
    <div class="node R">
      apple
      <div class="node A">
        huawei
        <div class="node C">
          honor
        </div>
      </div>
      <div class="node D">
        xiaomi
        <div class="node">redmi</div>
        <div class="node">mi lite</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  }
};
</script>
<style lang="less">
@size: 55px;
@top: 90px;
@left: 40px;
@line: 50px;
@h: sqrt(pow(@top, 2) + pow(@left, 2)) - @size;
@ty: (@h - @size)/2 + @top / 2;
.node {
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #128aeb;
  text-align: center;
  width: @size;
  height: @size;
  line-height: @line;
  top: @top;
  border-radius: @size / 2;
  &:after {
    font-size: @size / 2;
    font-family: Arial;
    line-height: @size;
    color: #555;
    // content: attr(data-name);
  }
  .node:before {
    content: " ";
    display: block;
    position: absolute;
    width: 1px;
    height: @h;
    background-color: #128aeb;
    left: 0px;
    top: 0px;
  }

  .node:last-child {
    left: @left;
    &:before {
      transform: translate(@size / 2 - @left / 2 - 2px, -@ty - 2px)
        rotate(atan(@top / @left)- pi() / 2);
    }
  }

  .node:first-child {
    left: -@left;
    &:before {
      transform: translate(@left / 2 + @size / 2, -@ty)
        rotate(pi() / 2 - atan(@top / @left));
    }
  }
}

.R {
  left: 200px;
  top: 100px;
}
</style>
<!-- <style scoped>
.node {
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #999;
  text-align: center;
  width: 50px;
  height: 50px;
  line-height: 50px;
  top: 90px;
  border-radius: 25px;
}
.node:after {
  font-size: 25px;
  font-family: Arial;
  line-height: 50px;
  color: #555;
  content: attr(data-name);
}
.node .node:before {
  content: " ";
  display: block;
  position: absolute;
  width: 1px;
  height: 48.488578017961046px;
  background-color: #999;
  left: 0px;
  top: 0px;
}
.node .node:last-child {
  left: 40px;
}
.node .node:last-child:before {
  transform: translate(3px, -46.24428900898052px)
    rotate(-0.41822432957922895rad);
}
.node .node:first-child {
  left: -40px;
}
.node .node:first-child:before {
  transform: translate(45px, -44.24428900898052px)
    rotate(0.41822432957922895rad);
}
.R {
  left: 200px;
  top: 100px;
}
</style>
-->
