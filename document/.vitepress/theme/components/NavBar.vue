<template>
  <a class="title" :aria-label="$site.title + ', back to home'" :href="$site.base">
    <img class="logo" v-if="$theme.logo" :src="withBase($theme.logo)" alt="logo" />
    <span>{{ $site.title === 'VitePress' ? '' : $site.title }}</span>
  </a>
  <nav class="nav-links" v-if="navData">
    <template v-for="item of navData">
      <NavDropdownLink v-if="item.items" :item="item" />
      <NavBarLink v-else :item="item" />
    </template>
  </nav>
</template>

<script>
import { computed } from "vue";
import { withBase } from "../utils";
import { useSiteDataByRoute } from "vitepress";
import NavBarLink from "./NavBarLink.vue";
import NavDropdownLink from "./NavDropdownLink.vue";
export default {
  components: {
    NavBarLink,
    NavDropdownLink,
  },
  setup() {
    return {
      withBase,
      navData:
        process.env.NODE_ENV === "production"
          ? // navbar items do not change in production
            useSiteDataByRoute().value.themeConfig.nav
          : // use computed in dev for hot reload
            computed(() => useSiteDataByRoute().value.themeConfig.nav),
    };
  },
};
</script>

<style>
.title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-color);
}

.logo {
  margin-right: 0.75rem;
  height: 1.3rem;
  vertical-align: bottom;
}

.nav-links {
  list-style-type: none;
}
</style>
