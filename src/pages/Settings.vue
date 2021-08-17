<template>
  <div :class="'q-pa-md flex flex-center fit ' +'bg-'+store.state.primary">
    <div :class="'full-width '" >
      <q-input clearable filled 
      class="full-width"
      :color="store.state.primary" v-model="store.state.reward1" label="Reward 1" />
      
    </div>
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
setup(){
    const store = inject("store");
    return{
        store
    }
}

}
</script>

<style>

</style>