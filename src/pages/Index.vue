<template>
  <q-page class="flex bg-red-3 flex-center">
    <div class="q-pa-md">
    <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      animated
      inactive-color="red-2"
      active-color="red-10"
      class="bg-red-4"
    >
      <q-step
        :name="1"
        title="Decide on the Task to be done"
        icon="task"
        :done="step > 1"
        :header-nav="step > 1"
      >
           <Todo/>
        <q-stepper-navigation class="q-pa-md absolute-bottom">
          <q-btn @click="() => { done1 = true; step = 2 }" color="red-10" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        inactive-color="red-3"
        title="Work for 25 minutes"
        caption=""
        icon="settings"
        :done="step > 2"
        :header-nav="step > 2"
      >     
            <Timer :timeChoose="2"  :total="0.1"/>

        <q-stepper-navigation class="q-pa-md absolute-bottom">
          <q-btn color="red-10" @click="step = 3" label="Continue" />
          <q-btn flat @click="step = 1" color="red-10" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        inactive-color="red-3"
        title="Take a short break, reward yourself"
        icon="add_comment"
        :header-nav="step > 3"
      >
        <Wheel/>

        <q-stepper-navigation class="q-pa-md absolute-bottom">
          <q-btn color="red-10" @click="done3 = true" label="Finish" />
          <q-btn flat @click="step = 2" color="red-10" label="Back" class="q-ml-sm" />
          <q-btn flat @click="step = 1" color="red-10" label="Restart" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      
    </q-stepper>
  </div>
    
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue';
import Timer from 'components/Timer.vue';
import Wheel from 'components/Wheel.vue';
import Todo from 'components/Todo.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    Timer,
    Wheel,
    Todo,
  },
  setup () {
    return {
      step: ref(1)
    }
  }
})
</script>
