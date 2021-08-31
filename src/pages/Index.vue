<template>
  <q-page :class=" 'bg-'+store.state.primary ">
    <div
    @dblclick="this.store.state.step ++"  
    :class="this.$q.screen.xs ? ('fit q-pa-lg' ) : 'q-pa-xl' "
    :style="this.$q.screen.xs ? ('' ) : 'margin-right: auto; margin-left: auto;  width:90% ' ">
      <q-list  class="justify-around">
        <q-slide-item @left="store.methods.deleteTask(todo)" 
        :class="'text-center text-white bg-'+store.state.secondary"
        @right="store.methods.deleteTask(todo)" left-color="green" right-color="red"
        v-for="todo in store.state.todos"
          :key="todo">
        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Done
          </div>
        </template>
        <template v-slot:right>
          <div class="row items-center">
            Delete <q-icon right name="delete" />
          </div>
        </template>

        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="done" />
          </q-item-section>
          <q-item-section :class="'text-center text-white bg-'+store.state.secondary"><strong>{{todo}}</strong> </q-item-section>
          <q-item-section avatar>
            <p class="text-center" style="font-size: 10px ; opacity: 50%">swipe <br> right done - left delete</p> 
          </q-item-section>
        </q-item>
      </q-slide-item>
       
      </q-list>
      <q-stepper
        v-model="store.state.step"
        vertical
        ref="stepper"
        :inactive-color="store.state.secondary.replace('8', '5')"
        :active-color="store.state.secondary"
        :class="'bg-'+store.state.primary"
      >
        <q-step
          :name="1"
          title="Decide on the Task to be done"
          prefix="1"
          :done="store.state.step > 1"
          :header-nav="store.state.step > 1"
        >
          <Todo
          style="height: 400px" />
        </q-step>

        <q-step
          :name="2"
          inactive-color="red-3"
          :title="`Focus for ${store.state.focus} minutes`"
          prefix="2"
          :done="store.state.step > 2"
          :header-nav="store.state.step > 2"
        > 
          <!-- <Timer :total="25" /> -->
          <Timer class="flex flex-center" style="height: 500px"
          :total="store.state.focus " :step="3"/>
        </q-step>

        <q-step
          :name="3"
          inactive-color="red-3"
          title="Take a short break, reward yourself"
          prefix="3"
          :done="store.state.step > 3"
          :header-nav="store.state.step > 3"
        >
          <Wheel />
        </q-step>
        <q-step
          :name="4"
          inactive-color="blue-3"
          :title="`Rest ${ store.state.isLong ? store.state.long : store.state.short}  minutes`"
          caption=""
          prefix="4"
          :header-nav="store.state.step > 4"
          class=" q-gutter-md "
        >
          <div class="text-center text-red-10  q-gutter-xs">
            <h5><strong style="width:%100; ">{{ store.state.reward.value }}</strong></h5>
          <!-- <Timer :total="5" /> -->
          <q-btn flat dense rounded :color="store.state.secondary" 
          class="q-pa-md"
          label="long - short" @click="store.state.isLong = !store.state.isLong" />
          </div>
          <Timer v-if="store.state.isLong" :total="store.state.long" :step="2" />
          <Timer v-if="!store.state.isLong" :total="store.state.short" :step="2" />
        </q-step>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, inject } from "vue";
import Timer from "components/Timer.vue";
import Wheel from "components/Wheel.vue";
import Todo from "components/Todo.vue";

export default defineComponent({
  name: "PageIndex",
  components: {
    Timer,
    Wheel,
    Todo,
  },
  setup() {
    const store = inject("store");

    return {
      store,
    };
  },
});
</script>
