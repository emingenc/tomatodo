<template>
  <div class=" window-height text-center" >
    <div :class="'q-gutter-y-md '+'bg-' + store.state.primary " >
        <q-tabs
          v-model="tab"
          :class="' text-white bg-' + store.state.primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="appearance" label="Appearance" />
          <q-tab name="rewards" label="Rewards" />
          <q-tab name="times" label="Times" />
        </q-tabs>

        <q-separator />
        <q-tab-panels
          v-model="tab"
          animated
          :class="this.$q.screen.xs ? ('q-pa-sm' + ' bg-' + store.state.primary) : (' q-pa-xl' +' bg-' + store.state.primary) "
          :style="this.$q.screen.xs ? ('' ) : 'width: 100% ; ' ">
        >
          <q-tab-panel name="appearance" class="q-pa-md">
            <div class="text-h6 ">Appearance</div>
            Choose color
            <div class="q-pa-md q-gutter-md"> 
            <q-btn ripple color="red"        @click="store.methods.setColor( 'red')" />
            <q-btn ripple color="indigo"  @click="store.methods.setColor( 'indigo')" />
            <q-btn ripple color="blue"  @click="store.methods.setColor( 'blue')" />
            <q-btn ripple color="green"  @click="store.methods.setColor( 'green')" />
            <q-btn ripple color="purple"  @click="store.methods.setColor( 'purple')" />
            <q-btn ripple color="brown"  @click="store.methods.setColor( 'brown')" />
            <q-btn ripple color="teal" @click="store.methods.setColor( 'teal')" />
            <q-btn ripple color="orange" @click="store.methods.setColor( 'orange')" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="rewards" >
            <div class="text-h6">Rewards</div>
            <q-input
              clearable
              filled
              class=" q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward1"
              label="Reward 1"
            />
            <q-input
              clearable
              filled
              class=" q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward2"
              label="Reward 2"
            />
            <q-input
              clearable
              filled
              class=" q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward3"
              label="Reward 3"
            />
            <q-input
              clearable
              filled
              class=" q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward4"
              label="Reward 4"
            />
            <q-input
              clearable
              filled
              class=" q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward5"
              label="Reward 5"
            />
            <q-input
              clearable
              filled
              class="q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward6"
              label="Reward 6"
            />
          </q-tab-panel>

          <q-tab-panel name="times" >
            <div class="text-h6">Time</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
    </div>
  </div>
</template>

<script>
import { ref, inject } from "vue";
export default {
  setup() {
    const store = inject("store");
    return {
      store,
      tab: ref("rewards"),
    };
  },
};
</script>

<style></style>
