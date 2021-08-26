<template>
  <q-page :class=" 'bg-'+store.state.primary ">
    <div
    @dblclick="this.store.state.step ++"  
    :class="this.$q.screen.xs ? ('fit q-pa-lg' ) : 'q-pa-xl' "
    :style="this.$q.screen.xs ? ('' ) : 'margin-right: auto; margin-left: auto;  width:70% ' ">
      <q-list  class="justify-around">
        <q-item
         
          tag="label"
          class="q-pa-md"
          v-ripple
          v-for="todo in store.state.todos"
          :key="todo"
        >
          <q-item-section side top>
            <q-checkbox false @click="store.methods.deleteTask(todo)" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ todo }}</q-item-label>
          </q-item-section>
          <q-item-section top side>
            <div class="text-grey-8 q-gutter-xs"></div>
          </q-item-section>
        </q-item>
      </q-list>
      <q-stepper
        v-model="store.state.step"
        vertical
        ref="stepper"
        animated
        :inactive-color="'red-1'"
        :active-color="store.state.secondary"
        :class="'bg-'+store.state.primary"
      >
        <q-step
          :name="1"
          title="Decide on the Task to be done"
          icon="task"
          :done="store.state.step > 1"
          :header-nav="store.state.step > 1"
        >
          <Todo />
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
          <!-- <Timer :total="25" /> -->
          <Timer :total="store.state.focus " :step="3"/>
        </q-step>

        <q-step
          :name="3"
          inactive-color="red-3"
          title="Take a short break, reward yourself"
          icon="add_comment"
          :header-nav="store.state.step > 3"
        >
          <Wheel />
        </q-step>
        <q-step
          :name="4"
          inactive-color="blue-3"
          title="Rest 5 minutes"
          caption=""
          icon="settings"
          :done="store.state.step > 2"
          :header-nav="store.state.step > 2"
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
import { defineComponent, ref, inject } from "vue";
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
