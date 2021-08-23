<template>
  <q-layout view="lHh Lpr lFf">
    <q-toolbar :class="'bg-'+store.state.primary+ ' gt-xs text-white'">
      <q-toolbar-title>
        Pomodoro Wheel
      </q-toolbar-title>
      
    <bottom-nav
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
          class=" gt-xs"
        />
    </q-toolbar>
    <q-page-container :class="'bg-'+store.state.primary">
      <router-view />
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
import { useQuasar } from 'quasar'
import { defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  components: {BottomNav},
  setup () {
    const store = inject("store");
    const $q = useQuasar()
    let lstore = $q.localStorage.getItem('localStore')
        if(lstore){

          store.state = JSON.parse(lstore)
        }
      let menu =  [
                        {
                          title: 'How to',
                          caption: "",
                          icon: "book",
                          link: "../../howto",
                        },
                        {
                          title: 'home',
                          caption: "",
                          icon: "home",
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
  }
})
</script>
