<template>
  <q-layout :class="'fit bg-'+store.state.primary" view="lHh Lpr lFf">
    <q-toolbar :class="'bg-'+store.state.primary+ ' gt-xs text-white'">
      <q-toolbar-title  >
          <q-avatar class="q-pl-xl q-pr-xl"  size="68px">
            <img :src="require('assets/images/logo.png')" alt="logo"  />
          </q-avatar>
        <strong class="q-pl-xl q-pr-xl">Pomodoro Wheel</strong> 

      </q-toolbar-title>
      
    <bottom-nav
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
          class=" gt-xs"
        />
    </q-toolbar>
    <q-page-container  >
      <router-view  />
    </q-page-container>
    <q-footer reveal elevated :class="'flex flex-center text-white xs '+'bg-'+store.state.primary">
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
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {BottomNav},
  setup () {
    const store = inject("store");
    
      let menu =  [
                        {
                          title: 'How to',
                          caption: "",
                          icon: "book",
                          link: "../../howto",
                        },
                        {
                          title: 'todo',
                          caption: "",
                          icon: "task",
                          link: "../todos",
                        },
                        {
                          title: 'focus',
                          caption: "",
                          icon: "timer",
                          link: "../home",
                        },
                        {
                          title: 'settings',
                          caption: "",
                          icon: "settings",
                          link: "settings",
                        },
                      ]


    return {
      store,
      menu,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
})
</script>
