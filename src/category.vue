<template>
  <div class="box">
    <div class="left">
      <Slider></Slider>
    </div>
    <main>
      <c_List></c_List>
    </main>
  </div>
</template>

<script>
  import slider from '@/components/slider'
  import c_list from '@/components/category/c_list'
  export default {
    name: "category",
    components:{
      "Slider": slider,
      "c_List": c_list
    }
  }
</script>

<style scoped>
  .box{
    display: flex;
    justify-content: space-between;
    height:100vh;
  }
  .box .left{
    width: 18%;
  }
  .box main{
    width: 82%;
    background-color: #f2f2f2;
  }
</style>
