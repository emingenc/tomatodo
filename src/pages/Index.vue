<template>
  <q-page class="flex bg-red-3 flex-center">
    <div class="q-pa-md">
       <q-list style="width:100%;" class="justify-around">
        <q-item tag="label" class="q-pa-md "  v-ripple
        v-for="todo in store.state.todos" :key="todo">
            <q-item-section side top>
            <q-checkbox  @click="store.methods.deleteTask(todo)"/>
            </q-item-section>

            <q-item-section>
            <q-item-label>{{todo}}</q-item-label>
            </q-item-section>
            <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            
          </div>
        </q-item-section>
        </q-item>

      </q-list>
    <q-stepper
      v-model="store.state.step"
      vertical
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
        :done="store.state.step > 1"
        :header-nav="store.state.step > 1"
      >
           <Todo/>
        <q-stepper-navigation class="q-pa-md absolute-bottom">
          <q-btn @click=" store.state.step = 2 " color="red-10" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        inactive-color="red-3"
        title="Work for 25 minutes"
        caption=""
        icon="settings"
        :done="store.state.step > 2"
        :header-nav="store.state.step > 2"
      >     
            <Timer :total="0.1"/>

        <q-stepper-navigation class="q-pa-md absolute-bottom">
          <q-btn color="red-10" @click="store.state.step = 3" label="Continue" />
          <q-btn flat @click="store.state.step = 1" color="red-10" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        inactive-color="red-3"
        title="Take a short break, reward yourself"
        icon="add_comment"
        :header-nav="store.state.step > 3"
      >
        <Wheel/>

        <q-stepper-navigation class="q-pa-md center ">
          <q-btn color="red-10" @click="done3 = true" label="Finish" />
          <q-btn flat @click="store.state.step = 2" color="red-10" label="Back" class="q-ml-sm" />
          <q-btn flat @click="store.state.step = 1" color="red-10" label="Restart" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      
    </q-stepper>
  </div>
    
  </q-page>
</template>

<script>
import { defineComponent,ref, inject } from 'vue';
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
    const store = inject('store')

    return {
      store
    }
  }
})
</script>
