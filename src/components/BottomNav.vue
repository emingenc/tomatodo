<template>
  <div class="flex flex-center">

      <q-tabs  content-class='q-pr-md text-h2'
      :switch-indicator="$q.platform.is.mobile ? true : false"
      :active-color="store.state.secondary" >
            <q-route-tab  :no-caps="true" style="width: 73px; "
            :to="link"  :icon="icon" round :label="title"/>

      </q-tabs>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {
  setup(){
    const store = inject("store");
    return{
      store
    }
  },
  name: 'NavMenu',
  computed: {
  },
  props: {
    title: {
      type: String,
      required: true
    },
    permission: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>