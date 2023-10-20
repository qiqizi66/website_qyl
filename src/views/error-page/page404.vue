<template>
  <div class="not-found">
    <span class="txt1"> 404 | This page could not be found. </span>
  </div>
</template>
<script>
export default {
  name: "page404",
  metaInfo: {
    title: "404: This page could not be found.",
  },
  data() {
    return {};
  },
  methods: {
    toPath(path) {
      console.log(path, this.$router);
      this.$router.push(path);
    },
  },
};
</script>

<style lang='scss' scoped>
// PC端样式
@media screen and (min-width: 1024px) {
  .not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    .txt1 {
      z-index: 42;
      width: 676px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-wrap: break-word;
      color: rgba(102, 102, 102, 1);
      font-size: 32px;
      font-family: MSBeeRegular;
      line-height: 45px;
      text-align: left;
      align-self: center;
    }
  }
}
// 移动端样式
@media (max-width: 1024px) {
  .not-found {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .txt1 {
      z-index: 42;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-wrap: break-word;
      color: rgba(102, 102, 102, 1);
      font-size: 20px;
      font-family: MSBeeRegular;
      line-height: 28px;
      text-align: left;
      align-self: center;
      letter-spacing: -1px;
    }
  }
}
</style>