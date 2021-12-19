<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import store from './store'

document.addEventListener('deviceready', async () => {
  // Obtain user consent first

  await admob.start() // or start loading ads

  // Load ads here
}, false)

let banner

document.addEventListener('deviceready', async () => {
  banner = new admob.BannerAd({
    adUnitId: 'ca-app-pub-1161509012137925/9039660385',
    position: 'top'
  })

  await banner.show()
}, false)


export default defineComponent({
  name: 'App',
  setup(){
    
    provide('store',store)
  },
  mounted(){
   },
})
</script>
