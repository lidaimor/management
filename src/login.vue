<template>
  <div class="bg">

    <a-form class="wrap"
            :form="form"
            @submit="handleSubmit"
    >
      <a-form-item>
        <a-input placeholder="Username" v-model="username">
          <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-model="password"
                 type="password"
                 placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          html-type="submit"
        >
          Log in
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        // hasErrors,
        form: this.$form.createForm(this),
        username: '',
        password: ''
      };
    },
    mounted() {
      this.$nextTick(() => {
        // To disabled submit button at the beginning.
        this.form.validateFields();
      });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
        var that = this;
        $.ajax({
          url: 'http://localhost:8888/user/login',
          type: 'post',
          dataType: 'json',
          data:{username: that.username,password: that.password},
          xhrFields: {
            withCredentials: true
          },
          crossDomain: true,
          success: function (response) {
            console.log(response);
            if(response.code == 0){
              that.$router.push({path: '/category'});
            }else{
            }
          },
          error: function () {
            console.log("出错了！");
          }
        });
      },
    },
  };
</script>
<style scoped>
  .bg {
    width: 100%;
    height: 100vh;
    background: url("assets/img/bg.jpg");
    padding-top: 150px
  }
  .wrap {
    width: 40%;
    padding: 50px 100px;
    margin: 0 auto;
    box-shadow: 0 0 5px #e6e6e6;
    background-color: rgba(0,0,0,0.1);
  }
</style>
