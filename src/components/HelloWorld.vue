<template>
  <div class="hello">
      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>
  </div>
    <div class="hello">

      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>
  </div>
    <div class="hello">

      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>      <BlockNode draggable={true}/>
  </div>
</template>

<script>
import BlockNode from "./BlockNode.vue"

export default {
  name: 'HelloWorld',
 components:{BlockNode},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
}
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>
