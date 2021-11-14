<template>
  <div class="fit flex flex-center">
    <q-list  bordered padding class="rounded-borders text-bold " >
      <q-item-label :class="'q=pa-xl text-center text-h3  text-white  bg-'+store.state.secondary" header>THE POMODORO TECHNIQUE</q-item-label>
      <q-item 
      
      clickable v-ripple :class="'howto bg-white  text-'+store.state.secondary">
        <q-item-section >
          <q-item-label >1 - DECIDE ON THE TASK</q-item-label>
          <q-item-label caption>First thing is to decide on which task would you like to complete </q-item-label>
        </q-item-section>
        <q-item-section avatar top >
          <q-icon size='xl' name="check"  :color="store.state.secondary" />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple :class="'howto bg-'+store.state.primary+' text-'+store.state.secondary">
        <q-item-section avatar top>
          <q-icon size='xl' name="timer"  :color="store.state.secondary" />
        </q-item-section>
        <q-item-section >
          <q-item-label >2 - SET THE POMODORO TIMER</q-item-label>
          <q-item-label caption>Set your timer to 25 minutes and start working on the task. Avoid all distractions</q-item-label>
        </q-item-section>
      </q-item>
      <q-item 
      clickable v-ripple :class="'howto bg-white  text-'+store.state.secondary">
        <q-item-section >
          <q-item-label >3 - WORK UNTIL IT RINGS</q-item-label>
          <q-item-label caption>Keep working till 25 minutes and review what you accomplished as the timer rings </q-item-label>
        </q-item-section>
        <q-item-section avatar top >
          <q-icon size='xl' name="laptop"  :color="store.state.secondary" />
        </q-item-section>
      </q-item>
      <q-item clickable v-ripple :class="'bg-'+store.state.primary+' text-'+store.state.secondary">
        <q-item-section avatar top>
          <q-icon size='xl' name="coffee"  :color="store.state.secondary" />
        </q-item-section>
        <q-item-section >
          <q-item-label >4 - TAKE A SHORT BREAK</q-item-label>
          <q-item-label caption>Take 4 -5 minutes short break. Stretch, go for a walk, check phone or anything you like to do </q-item-label>
        </q-item-section>
      </q-item>
      <q-item 
      clickable v-ripple :class="'howto bg-white  text-'+store.state.secondary">
        <q-item-section >
          <q-item-label >5 - WORK. BREAK REPEAT</q-item-label>
          <q-item-label caption>After short break, repeat the process of 25 mins work, 5 mins break. After 4 times take 20-30 mins break </q-item-label>
        </q-item-section>
        <q-item-section avatar top >
          <q-icon size='xl' name="loop"  :color="store.state.secondary" />
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
.howto {

    height:150px;
    align-items:center;
    font-size: 26px;
}
</style>