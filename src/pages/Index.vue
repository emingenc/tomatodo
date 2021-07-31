<template>
  <q-page class="flex bg-red-5 flex-center">
    <Timer/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Timer from 'components/Timer.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Timer,
  },
})
</script>
