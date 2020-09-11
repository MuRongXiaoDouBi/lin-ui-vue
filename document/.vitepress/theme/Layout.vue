<template>
  <div class="theme">
    <header>
      <NavBar />
    </header>
    <main v-if="$page.frontmatter.home">
      <Page />
    </main>
    <template v-else>
      <aside>
        <SideBar />
      </aside>
      <main>
        <Page />
        <Display />
      </main>
    </template>
  </div>
  <Debug />
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideBar.vue";
import Page from "./components/Page.vue";
import Display from "./components/Display.vue";
import { usePageData } from "vitepress";
import { ref, watch } from "vue";

export default {
  components: {
    NavBar,
    SideBar,
    Page,
    Display,
  },
  setup() {
    const pageData = usePageData();
    const isHome = ref(true);
    watch(
      () => pageData.value.title,
      () => {
        isHome.value =
          pageData.value.frontmatter.layout === "home" ? true : false;
      }
    );
    return {
      isHome,
    };
  },
};
</script>
