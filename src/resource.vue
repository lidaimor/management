<template>
  <div class="box">
    <div class="left">
      <Slider></Slider>
    </div>
    <main>
      <d_List></d_List>
    </main>
  </div>
</template>

<script>
  import slider from '@/components/slider'
  import d_list from '@/components/datas/d_list'
  export default {
    name: "resource",
    components:{
      "Slider": slider,
      "d_List": d_list
    }
  }
</script>

<style scoped>
  .box{
    display: flex;
    justify-content: space-between;
  }
  .box .left{
    width: 18%;
  }
  .box main{
    width: 82%;
    background-color: #f2f2f2;
  }
</style>
