<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <h2 style="margin:40px 0 10px;font-size:24px;">{{msg}}</h2>
    {{JSON.stringify(dataFromPortal)}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataFromPortal: null,
      msg: ""
    };
  },
  mounted() {
    try {
      this.dataFromPortal = this.$getUserInfo();
      this.msg = "从注册中心传递来的数据";
    } catch (error) {
      this.dataFromPortal = this.$store.state.userInfo;
      this.msg = "demo子程序自己的数据";
    }
  }
};
</script>

<style lang="less">
#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
