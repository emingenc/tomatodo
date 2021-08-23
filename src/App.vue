<template>
  <router-view />
</template>
<script>
import { defineComponent, provide, onMounted } from 'vue';
import { useQuasar } from 'quasar'
import store from './store'

export default defineComponent({
  name: 'App',
  setup(){
    const $q = useQuasar()
    
    onMounted(()=>{

        // let lstore = $q.localStorage.getItem('localStore')
        // if(lstore){

        //   store.state = lstore
        // }
    
    })
    window.addEventListener("beforeunload", ()=>{$q.localStorage.set('localStore', store.state)})
    window.onbeforeunload = function(){
    return "Are you sure you want to close the window?";
}
    provide('store',store)
  },
  mounted(){
    
  },
})
</script>
