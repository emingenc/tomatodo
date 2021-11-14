<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import store from './store'
import { AdMobPlus, BannerAd } from '@admob-plus/capacitor'

export default defineComponent({
  name: 'App',
  setup(){
    
    provide('store',store)
  },
  mounted(){
    async () => {
  const banner = new BannerAd({
    adUnitId: 'ca-app-pub-1161509012137925/9039660385',
  })
  await banner.show()

  AdMobPlus.addListener('banner.impression', async () => {
    await banner.hide()
  })
}
    
  },
})
</script>
