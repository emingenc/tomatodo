<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import store from './store'

export default defineComponent({
  name: 'App',
  setup(){
    
    
    window.addEventListener("beforeunload", ()=>{console.log('')})
    window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}
    provide('store',store)
  },
})
</script>
