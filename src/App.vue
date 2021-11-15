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
  mounted(){ },
})
</script>
