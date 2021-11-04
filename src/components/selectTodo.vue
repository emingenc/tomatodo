<template>
    <div class="q-pa-md" style="max-width: %100;">
    <div class="q-gutter-md">
      <q-select filled v-model="store.state.currentTodo" :options="store.state.todos" label="focus on just one task" />
    </div>
  </div>
</template>

<script>
import { ref,inject } from 'vue'

export default {
  setup () {
    const store = inject('store')   
    return {
      store,  
    }
  }
}
</script>
<style>

</style>