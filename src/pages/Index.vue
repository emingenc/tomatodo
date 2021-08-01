<template>
  <q-page class="flex bg-red-5 flex-center">
    <Todo/>
    <Timer/>
    <Wheel/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import Timer from 'components/Timer.vue';
import Wheel from 'components/Wheel.vue';
import Todo from 'components/Todo.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Timer,
    Wheel,
    Todo,
  },
})
</script>
