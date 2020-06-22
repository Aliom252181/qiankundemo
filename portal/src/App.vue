<template>
  <div id="container">
    <div v-if="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
  </div>
</template>

<script>
export default {
  name: "App",
  props: {
    loading: Boolean,
    content: String
  }
};
</script>
