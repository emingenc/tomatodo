<template >
  <div  :class="'q-pa-xl flex flex-center  window-height ' +'bg-'+store.state.primary">
    <div :class="'fit'" >
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward1" label="Reward 1" />
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward2" label="Reward 2" />
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward3" label="Reward 3" />
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward4" label="Reward 4" />
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward5" label="Reward 5" />
      <q-input clearable filled 
      class="full-width q-pa-sm"
      :color="store.state.primary" v-model="store.state.reward6" label="Reward 6" />
      
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