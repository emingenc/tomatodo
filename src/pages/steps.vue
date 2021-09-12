<template>
  <div class="fit flex flex-center">
    <q-list bordered padding class="rounded-borders text-bold" >
      <q-item-label header>Folders</q-item-label>
      <q-item 
      id="howitem"
      clickable v-ripple :class="'bg-white  text-'+store.state.secondary">
        <q-item-section >
          <q-item-label >1 - DECIDE ON THE TASK</q-item-label>
          <q-item-label caption>First thing is to decide on which task would you like to complete </q-item-label>
        </q-item-section>
        <q-item-section avatar top >
          <q-avatar icon="task"  :text-color="store.state.secondary" />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple :class="'bg-'+store.state.primary+' text-'+store.state.secondary">
        <q-item-section avatar top>
          <q-avatar icon="task"  text-color="white" />
        </q-item-section>
        <q-item-section >
          <q-item-label >2 - SET THE POMODORO TIMER</q-item-label>
          <q-item-label caption>Set your timer to 25 minutes and start working on the task. Avoid all distractions</q-item-label>
        </q-item-section>
      </q-item>

      
    </q-list>
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
#howitem {

    height:100px
}
</style>