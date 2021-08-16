<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar class="bg-primary gt-xs text-white">
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      
    <bottom-nav
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
          class=" gt-xs"
        />
    </q-toolbar>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer reveal elevated class="flex flex-center bg-primary text-white xs">
      <bottom-nav
        v-for="link in menu"
        :key="link.title"
        v-bind="link"
        class="text-white"
      />
    </q-footer>
  </q-layout>
</template>

<script>
import BottomNav from "src/components/BottomNav.vue";

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {BottomNav},
  setup () {
   
      let menu =  [
                        {
                          title: 'instructions',
                          caption: "",
                          icon: "book",
                          link: "../../dashboard",
                        },
                        {
                          title: 'home',
                          caption: "",
                          icon: "home",
                          link: "../",
                        },
                        {
                          title: 'settings',
                          caption: "",
                          icon: "settings",
                          link: "settings",
                        },
                      ]


    return {
      menu,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
