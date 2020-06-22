<template>
  <div class="home">
    <img alt="Vue logo" class="logo" :src="img" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      img: "",
      msg: ""
    };
  },
  mounted() {
    try {
      this.$getUserInfo();
      this.img = require("../assets/logo.png");
      this.msg = "连接微服务注册中心成功~";
    } catch (error) {
      this.img = require("../assets/huaji.jpg");
      this.msg = "注册中心走丢了，现在是子程序环境~";
    }
  }
};
</script>
