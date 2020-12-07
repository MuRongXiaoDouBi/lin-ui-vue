<template>
  <button @click="handleClick" class="l-button">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LButton',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const handleClick = () => {}
    return {
      handleClick
    }
  }
})
</script>