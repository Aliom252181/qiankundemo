import store from "../store";

/**
 * 子组件vueHome信息下发
 */
export function getUserInfo() {
  let msg = {
    data: {
      micro: store.state.base.micro,
      fns: [
        function getMicro() {
          return store.state.base.micro;
        },
        function getUserInfo() {
          return store.state.base.userInfo;
        },
        function getMyState() {
          return store.state.vueHome;
        },
      ],
    },
  };
  return msg;
}
