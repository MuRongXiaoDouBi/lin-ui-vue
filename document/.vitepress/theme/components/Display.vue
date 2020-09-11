<template>
  <div class="page-display">
    <div class="display-wrapper">
      <section class="mofang-demo">
        <iframe :src="ifrSrc" frameborder="0" width="100%" height="100%" scrolling="no"></iframe>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { withBase } from "../utils";
import { useRoute } from "vitepress";
export default {
  setup() {
    const ifrSrc = ref("");
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        console.log(route.path);
      }
    );
    return {
      ifrSrc,
    };
  },
};
</script>

<style scoped>
.page-display {
  position: fixed;
  top: 100px;
  right: 50px;
}
.display-wrapper {
  position: relative;
  width: 330px;
  height: 645px;
  /* top: 50%; */
  /* transform: translate(0, -50%); */
  margin: 0 56px 0 26px;
  background: url("../images/iphoneX.png") no-repeat center 0;
  background-size: 100%;
}
.mofang-demo {
  position: absolute;
  top: 64px;
  left: 21px;
  right: 23px;
  bottom: 22px;
  overflow: hidden;
  border-radius: 0 0 35px 35px;
  border: 1px solid #edf0f4;
  border-top: none;
  background-color: #edf0f4;
  /* background: red; */
}
.mofang-demo iframe {
  width: 0;
  max-width: 100%;
  min-width: 100%;
}
</style>