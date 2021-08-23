<template>
  <router-view />
</template>
<script>
import { defineComponent, provide, reactive } from 'vue';
import { useQuasar } from 'quasar'
import store from './store'

export default defineComponent({
  name: 'App',
  setup(){
    const $q = useQuasar()
    
    window.addEventListener("beforeunload", ()=>{$q.localStorage.set('localStore', JSON.stringify(store.state))})
    window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}
    provide('store',store)
  },
  mounted(){
    
  },
})
</script>
