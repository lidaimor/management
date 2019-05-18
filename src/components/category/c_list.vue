<template>
  <div class="wrap">
    <button class="btn" @click="appear">添加分类</button>
    <table>
      <tr>
        <td width="200">资料名</td>
        <td>状态</td>
        <td>标题</td>
        <td width="200">操作</td>
      </tr>
      <tr v-for="item in cList">
        <td>{{item.cname}}</td>
        <td>{{item.status}}</td>
        <td>{{item.simple}}</td>
        <td>
          <span @click="update(item)">修改</span>
          <span @click="del(item)">删除</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "c_list",
    data() {
      return {
        cList: [],
      }
    },
    mounted: function () {
      this.show();
    },
    methods: {
      appear(){
        this.$router.push({path:'/c_add'});
      },
      show() {
        var that = this;
        $.ajax({
          url: 'http://localhost:8888/category/get',
          type: 'get',
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            if (response.code == 0) {
              that.cList = JSON.parse(JSON.stringify(response.data));
            }
          },
          error: function () {
            console.log("出错了！");
          }
        });
      },
      del(item){
        var that = this;
        $.ajax({
          url: 'http://localhost:8888/category/dele',
          type: 'get',
          data:{cid: item.cid},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            if (response.code == 0) {
              that.$router.go(0);
            }
          },
          error: function () {
            console.log("出错了！");
          }
        });
      },
      update(item){
        this.$router.push({path:'/c_update',query:{item: item}})
      }
    }
  }
</script>

<style scoped>
  .wrap {
    background-color: #f2f2f2;
    padding: 20px 0 0;
  }

  table {
    width: 90%;
    text-align: center;
    background-color: #326801;
    margin-left: 20px;
  }

  table tr td {
    background-color: #fff;
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding: 10px;
  }

  table tr:nth-of-type(1) {
    text-align: center;
    font-size: 15px;
  }

  table tr:nth-of-type(1) td {
    color: #326801;
  }
  .btn{
    width:100px;
    text-align: center;
    line-height: 35px;
    font-size: 15px;
    background-color: #dff0d8;
    border-radius: 5px;
    color: #326801;
    border: 1px solid #d6e9c6;
    margin: 0 0 10px 20px;
  }
  td span{
    color: dodgerblue;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }
</style>
