<template>
  <q-page class="flex bg-red-2 flex-center">
    <div
    @dblclick="this.store.state.step ++" class="q-pa-md">
      <q-list style="width: 475px" class="justify-around">
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
        inactive-color="red-2"
        active-color="red-10"
        class="bg-red-3"
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
          <Timer :total="25 " :step="3"/>
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
        >
          <div class="text-center text-red-10  q-gutter-xs">
            <h5><strong style="width:%100; ">{{ store.state.reward.value }}</strong></h5>
          </div>
          <!-- <Timer :total="5" /> -->
          <Timer :total="5 " :step="1" />
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
