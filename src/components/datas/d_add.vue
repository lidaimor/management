<template>
  <div class="box">
    <div class="left">
      <Slider></Slider>
    </div>
    <main>
      <span class="iconfont" @click="back">&#xe612;</span>
      <form>
        <span>cid:</span><input class="t1" v-model="cid"/><br/>

        <span>上传图片:</span><input type="file" id="file1"/>
        <input type="button" value="上传" @click="load1"/><br/>

        <span>上传文件:</span><input type="file" id="file2"/>
        <input type="button" value="上传" @click="load2"/><br/>

        <span>资料名称:</span><input class="t1" v-model="dataName"/><br/>
        <span>资料详情:</span><input class="t1" v-model="dataDesc"/><br/>
        <input type="button" value="提交" class="btn" @click="up"/>
        <p class="notice">{{msg}}</p>
      </form>
    </main>
  </div>
</template>

<script>
  import slider from '@/components/slider'
  export default {
    name: "d_add",
    components:{
      "Slider": slider,
    },
    data(){
      return{
        cid: '',
        dataName: '',
        msg: '',
        dataDesc: '',
        url: '',
        fileName: ''
      }
    },
    methods:{
      back(){
        this.$router.push({path: '/resource'});
      },
      load1(){
        var that = this;
        var formData = new FormData();
        formData.append("file", document.getElementById("file1").files[0]);
        $.ajax({
          url: 'http://localhost:8888/data/upload',
          type: 'post',
          dataType: 'json',
          data: formData,
          contentType: false,
          processData: false,
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            that.url = response.data;
            console.log(that.url)
          },
          error: function () {
            console.log("出错了！");
          }
        });
      },
      load2(){
        var that = this;
        var formData = new FormData();
        formData.append("file", document.getElementById("file2").files[0]);
        $.ajax({
          url: 'http://localhost:8888/data/upload',
          type: 'post',
          dataType: 'json',
          data: formData,
          contentType: false,
          processData: false,
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            that.fileName = response.data;
            console.log(that.fileName)
          },
          error: function () {
            console.log("出错了！");
          }
        });
      },
      up(){
        var that = this;
        $.ajax({
          url: 'http://localhost:8888/data/add',
          type: 'post',
          dataType: 'json',
          contentType: 'application/text',
          data: JSON.stringify({url: that.url,dataFile: that.fileName, cid: that.cid.toString(),
            dataName: that.dataName, dataDesc: that.dataDesc}),
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            that.msg = response.message;
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
    width: 300px;
    margin-bottom: 10px;
  }
  .box form{
    margin: 70px auto;
    padding: 50px;
    width: 500px;
    background-color: #fff;
    opacity: 1;
  }
  form span{
    display: inline-block;
    margin-right: 25px;
    width: 60px;
  }
  .btn{
    display: block;
    margin: 10px auto;
  }
  .notice{
    color: red;
  }
  form input{
    margin-bottom: 15px;
  }
</style>
