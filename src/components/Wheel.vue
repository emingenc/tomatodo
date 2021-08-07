<template>
  <div class="wrap" @click="$refs.wheel.spin">
    <Wheel
      ref="wheel"
      :gift="gift"
      :data="data"
      @done="done"
      :imgParams="logo"
      style="w ; height:%50 ;  font-size: 65px"
    />
  </div>
</template>

<script >
import { defineComponent, inject } from "vue";
import { Wheel } from "vue3-fortune-wheel";
export default defineComponent({
  name: "App",
  components: {
    Wheel,
  },
  setup() {
    const store = inject("store");
    return {
      store,
      gift: Math.floor(Math.random() * 6) + 1,
      data: [
        {
          id: 1,
          value: "Social media",
          bgColor: "#4267B2",
          color: "#ffffff",
      
        },
        {
          id: 2,
          value: "Drink(Tea coffe etc)",
          bgColor: "#ffffff",
          color: "#000000",
        },
        {
          id: 3,
          value: "short game(mobile/pc)",
          bgColor: "#c92729",
          color: "#ffffff",
        },
        {
          id: 4,
          value: "Short YouTube video",
          bgColor: "#7d7db3",
          color: "#ffffff",
        },
        {
          id: 5,
          value: "Meditate",
          bgColor: "#ffffff",
          color: "#000000",
        },
        {
          id: 6,
          value: "Favorite music",
          bgColor: "#c92729",
          color: "#ffffff",
        },
      ],
      logo: {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png",
        width: 150,
        height: 150,
      },
    };
  },
  methods: {
    done(r) {
      this.store.state.reward = r

       setTimeout(()=>{this.store.state.step = 4}, 1200);
    },
  },
});
</script>

<style>
.wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>