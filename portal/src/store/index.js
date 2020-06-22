import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    base: {
      // 用户信息
      userInfo: {
        userName: "admin",
        userId: "12324",
        token: "adg1470u8fa0jk",
      },
      // 其他要传递的数据
      micro: {
        name: "microList",
        data: [
          { name: "vueHome", url: "http://localhost:7101" },
          { name: "microDemo", url: "http://localhost:7102" },
        ],
      },
    },
    /**
     * 子项目专有信息
     */
    vueHome: {
      data: {},
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
