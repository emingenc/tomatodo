<template >
  <div  :class="'flex flex-center window-height' +'bg-'+store.state.primary">
        <q-img
          src="https://overseasstudentsaustralia.com/wp-content/uploads/2019/01/the-pomodoro-technique-infographic-Overseas-Students-Australia.png"
        />
  </div>
</template>

<script>
import {inject} from 'vue';
export default {
setup(){
    const store = inject("store");
    return{
        store
    }
}

}
</script>

<style>

</style>