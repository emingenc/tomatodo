<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import { LocalStorage } from 'quasar'
import store from './store'

export default defineComponent({
  name: 'App',
  setup(){
    
    const lstore = LocalStorage.getItem('localStore')
    
   

    window.addEventListener("beforeunload", ()=>{$q.localStorage.set('localStore', store.state)})
    window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}
    provide('store',store)
  },
  mounted(){
    this.store.state = this.lstore
  },
})
</script>
