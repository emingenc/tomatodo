<template>
  <div class=" window-height flex flex-center" >
    <div class="q-gutter-y-md" >
      <q-card :class="'bg-' + store.state.primary">
        <q-tabs
          v-model="tab"
          :class="'text-white bg-' + store.state.primary"
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
          :style="this.$q.screen.xs ? ('' ) : 'width: 600px; ' ">
        >
          <q-tab-panel name="appearance">
            <div class="text-h6 ">Appearance</div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>

          <q-tab-panel name="rewards" >
            <div class="text-h6">Rewards</div>
            <q-input
              clearable
              filled
              class="fit q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward1"
              label="Reward 1"
            />
            <q-input
              clearable
              filled
              class="full-width q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward2"
              label="Reward 2"
            />
            <q-input
              clearable
              filled
              class="full-width q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward3"
              label="Reward 3"
            />
            <q-input
              clearable
              filled
              class="full-width q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward4"
              label="Reward 4"
            />
            <q-input
              clearable
              filled
              class="full-width q-pa-sm"
              :color="store.state.primary"
              v-model="store.state.reward5"
              label="Reward 5"
            />
            <q-input
              clearable
              filled
              class="full-width q-pa-sm"
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
      </q-card>
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
