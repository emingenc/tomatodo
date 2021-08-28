<template>
  <div class=" window-height text-center" >
    <div :class="'bg-' + store.state.primary " >
        

       
            <div class="text-h6 q-pa-xl">Appearance</div>
            Choose color
            <div class="q-pa-xl q-gutter-md"> 
            <q-btn round color="red-3"        @click="store.methods.setColor( 'red')" />
            <q-btn round color="indigo-3"  @click="store.methods.setColor( 'indigo')" />
            <q-btn round color="blue-3"  @click="store.methods.setColor( 'blue')" />
            <q-btn round color="light-blue-3"  @click="store.methods.setColor( 'light-blue')" />
            <q-btn round color="green-3"  @click="store.methods.setColor( 'green')" />
            <q-btn round color="purple-3"  @click="store.methods.setColor( 'purple')" />
            <q-btn round color="deep-purple-3"  @click="store.methods.setColor( 'deep-purple')" />
            <q-btn round color="brown-3"  @click="store.methods.setColor( 'brown')" />
            <q-btn round color="teal-3" @click="store.methods.setColor( 'teal')" />
            <q-btn round color="cyan-3" @click="store.methods.setColor( 'cyan')" />
            <q-btn round color="lime-3" @click="store.methods.setColor( 'lime')" />
            <q-btn round color="yellow-3" @click="store.methods.setColor( 'yellow')" />
            <q-btn round color="amber-3" @click="store.methods.setColor( 'amber')" />
            <q-btn round color="orange-3" @click="store.methods.setColor( 'orange')" />
            <q-btn round color="deep-orange-3" @click="store.methods.setColor( 'deep-orange')" />
            <q-btn round color="grey" @click="store.methods.setColor( 'grey')" />
            <q-btn round color="blue-grey" @click="store.methods.setColor( 'blue-grey')" />
            </div>
<div class="q-gutter-y-md q-pa-xl">
            <div class="text-h6 q-pa-xl">Rewards</div>
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
   </div>       
            <div class="q-gutter-y-md q-pa-xl">
              <div class="text-h6 q-pa-xl">Time settings</div>
                <p>focus: {{store.state.focus}} min</p>
            <q-slider  v-model="store.state.focus" :min="15" :max="45" :color="store.state.secondary"/>
                <p>short break: {{store.state.short}} min </p>
            <q-slider v-model="store.state.short" :min="1" :max="15" :color="store.state.secondary"/>
                <p>long break: {{store.state.long}} min </p>
            <q-slider v-model="store.state.long" :min="10" :max="30" :color="store.state.secondary"/>
            </div>
            <br>
            <br>
            <br>
            <br>
          
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
