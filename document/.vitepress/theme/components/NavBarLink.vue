<template>
  <a
    class="nav-link"
    :class="classes"
    :href="href"
    :target="target"
    :rel="rel"
    :aria-label="item.ariaLabel"
  >
    {{ item.text }}
    <OutboundLink v-if="isExternalLink" />
  </a>
</template>

<script>
// TODO dropdowns
import { defineComponent, computed } from "vue";
import { useRoute } from "vitepress";
import { withBase, isExternal } from "../utils";
import OutboundLink from "./icons/OutboundLink.vue";
const normalizePath = (path) => {
  path = path
    .replace(/#.*$/, "")
    .replace(/\?.*$/, "")
    .replace(/\.html$/, "");
  if (path.endsWith("/")) {
    path += "index";
  }
  return path;
};
export default defineComponent({
  components: {
    OutboundLink,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const item = props.item;
    const route = useRoute();
    const classes = computed(() => ({
      active: isActiveLink.value,
      external: isExternalLink.value,
    }));
    const isActiveLink = computed(() => {
      return normalizePath(withBase(item.link)) === normalizePath(route.path);
    });
    const isExternalLink = computed(() => {
      return isExternal(item.link);
    });
    const href = computed(() => {
      return isExternalLink.value ? item.link : withBase(item.link);
    });
    const target = computed(() => {
      if (item.target) {
        return item.target;
      }
      return isExternalLink.value ? "_blank" : "";
    });
    const rel = computed(() => {
      if (item.rel) {
        return item.rel;
      }
      return isExternalLink.value ? "noopener noreferrer" : "";
    });
    return {
      classes,
      isActiveLink,
      isExternalLink,
      href,
      target,
      rel,
    };
  },
});
</script>

<style>
.nav-link {
  color: var(--text-color);
  margin-left: 1.5rem;
  font-weight: 600;
  display: inline-block;
  height: 1.75rem;
  line-height: 1.75rem;
}

.nav-link:hover,
.nav-link.active {
  border-bottom: 2px solid var(--accent-color);
}

.nav-link.external:hover {
  border-bottom: 0;
}
</style>
