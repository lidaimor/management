<template>
  <div class="wrap">
    <p>Admin</p>
    <ul>
      <!--      <router-link to="/">-->
      <!--        <li>-->
      <!--          <span class="iconfont">&#xe658;</span>-->
      <!--          <span>用户</span>-->
      <!--        </li>-->
      <!--      </router-link>-->
      <router-link to="/category">
        <li>
          <span class="iconfont">&#xe628;</span>
          <span>分类</span>
        </li>
      </router-link>
      <router-link to="/resource">
        <li>
          <span class="iconfont">&#xe641;</span>
          <span>资料</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "slider",
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  .wrap {
    width: 275px;
    height: 100%;
    background-color: #20222a;
  }

  .wrap p {
    font-size: 16px;
    background-color: #20222a;
    color: #cecfd0;
    line-height: 60px;
    border-bottom: 2px solid #1c1e25;
    text-align: center;
    margin: 0;
  }

  ul li {
    font-size: 15px;
    background-color: #20222a;
  }

  ul li span {
    color: #bdbdc0;
    line-height: 70px;
    padding-left: 24px;
  }

  ul li span.iconfont {
    font-size: 20px;
  }

  li:hover span {
    color: #fff;
  }

  .router-link-active li{
    background-color: #009688;
  }
  .router-link-active li span{
    color: #fff;
  }
</style>
