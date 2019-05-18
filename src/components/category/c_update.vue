<template>
  <div class="box">
    <div class="left">
      <Slider></Slider>
    </div>
    <main>
      <span class="iconfont" @click="back">&#xe612;</span>
      <form>
        <span>cid:</span><input class="t1" v-model="cid"/><br/>
        <span>分类名称:</span><input class="t1" v-model="cname"/><br/>
        <span>分类缩写:</span><input class="t1" v-model="simple"/><br/>
        <input type="button" value="提交修改" class="btn" @click="add"/>
        <p class="notice">{{msg}}</p>
      </form>
    </main>
  </div>
</template>

<script>
  import slider from '@/components/slider'
  export default {
    name: "c_update",
    components:{
      "Slider": slider,
    },
    data(){
      return{
        cid: '',
        cname: '',
        simple: '',
        msg: '',
        item: this.$route.query.item,
      }
    },
    mounted:function(){
      this.cid = this.item.cid;
      this.cname = this.item.cname;
      this.simple = this.item.simple;
    },
    methods:{
      back(){
        this.$router.go(-1);
      },
      add(){
        var that = this;
        $.ajax({
          url: 'http://localhost:8888/category/update',
          type: 'post',
          dataType: 'json',
          contentType: 'application/text',
          data:JSON.stringify({cid: that.cid.toString(),cname: that.cname,simple: that.simple}),
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            that.msg = response.message;
            if(response.code == 0){

            }
          },
          error: function () {
            console.log("出错了！");
          }
        });
      }

    }
  }
</script>

<style scoped>
  .box{
    display: flex;
    justify-content: space-between;
    height: 100vh;
  }
  .iconfont{
    display: block;
    margin: 20px 0 0 30px;
    font-size: 20px;
    cursor: pointer;
  }
  .box .left{
    width: 18%;
  }
  .box main{
    width: 82%;
    background-color: #f2f2f2;
  }
  .t1{
    width: 250px;
    margin-bottom: 10px;
  }
  .box form{
    margin: 120px auto;
    padding: 50px;
    width: 500px;
    background-color: #fff;
    opacity: 1;
  }
  form span{
    width: 70px;
    display: inline-block;
    margin-right: 20px;
    text-align: right;
  }
  .btn{
    display: block;
    margin: 10px auto;
  }
  .notice{
    color: red;
  }
</style>
