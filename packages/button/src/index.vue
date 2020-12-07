<template>
  <button class="l-button" @click="handleClick">
    {{ title }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LButton',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  setup() {
    const handleClick = () => {}
    return {
      handleClick
    }
  }
})
</script>