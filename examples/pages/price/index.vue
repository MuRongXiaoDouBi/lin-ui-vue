<template>
  <lin-page title="Price">
    <l-price v-model="data" :deleted="true"></l-price>
  </lin-page>
</template>

<script>
import { ref } from 'vue';
import LinPage from "../../components/LinPage";
export default {
  components: {
    LinPage,
  },
  setup(){
    const data = ref('100')
    return {
      data
    }
  }
};
</script>