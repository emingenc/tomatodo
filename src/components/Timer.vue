<template>
  <div class="full-width text-center">
    <!-- <div class="text-center text-grey-2 full-width  q-pa-md">
      Choose your time:
      <q-option-group v-model="timeChoose" :options="timeOptions" color="blue" dark inline />
    </div> -->
    <q-circular-progress
      @click="tapTimer"
      show-value
      class="text-white q-ma-sm text-center"
      :max="initialTime"
      :value="totalTime"
      :size="this.$q.screen.xs ? ('221px' ) : '350px' " 
      :thickness="0.07"
      :color="timerColor"
      track-color="dark"
    >
      <div class="fit column wrap  ">
        
          <p
            v-if="!pauseButton"
            :class="` text-${timerColor}`"
            style="font-size: 15px"
          >
            Tap to start
          </p>
          <p
            v-if="pauseButton"
            :class="` text-${timerColor}`"
            style="font-size: 15px"
          >
            Tap to pause
          </p>

        
        <span :class="`row text-${timerColor}`" >
            {{ minutes }}:{{ seconds }}
            </span>
          
        
      </div>
    </q-circular-progress>
  </div>
</template>
<script>
import { inject } from "vue";
import BrowserNotifications from "../mixins/BrowserNotifications";
import { useQuasar } from 'quasar'
export default {
  mixins: [BrowserNotifications],
  props: ["total"],

  data() {
    const store = inject("store");
    const $q = useQuasar();

    return {
      store,
      $q,
      timer: null,
      pauseButton: false,
      resetButton: false,
      totalTime: this.total * 60,
      timeOptions: [
        { label: "Pomodoro", value: 25 },
        { label: "Short Break", value: 5 },
        { label: "Long Break", value: 10 },
      ],
    };
  },
  computed: {
    initialTime() {
      return this.total * 60;
    },
    minutes() {
      const minutes = Math.floor(this.totalTime / 60);
      return this.padTime(minutes);
    },
    seconds() {
      const seconds = this.totalTime - this.minutes * 60;
      return this.padTime(seconds);
    },
    timerColor() {
      const value = this.totalTime / 60;
      return value <= 3 ? "red-8" : value <= 10 ? "red-6" : "white";
    },
  },
  watch: {
    totalTime() {
      if (this.totalTime === 0) {
        this.showNotification(
          "Time is up!",
          "Test",
          require("assets/button.png")
        );
        setTimeout(()=>{this.store.state.step ++}, 500);
      }
    },
  },
  meta() {
    return {
      title: this.timer
        ? `(${this.minutes}:${this.seconds}) Pomodoro Timer`
        : "Pomodoro Timer",
    };
  },
  methods: {
    playSound () {
      var data = { soundurl : require('assets/sounds/ding.mp3') }; 
      var audio = new Audio(data.soundurl);
      audio.play();
    },
    showNotification () {
      this.playSound ()
        this.$q.notify({
          message: ' Countdown time finished. ',
          position: 'top',
          color: this.store.state.secondary,
          actions: [
            { label: 'Dismiss', color: 'white', handler: () => { /* ... */ } }
          ]
        }, 2000)
        },
    startTimer() {
      this.timer = setInterval(() => this.countdown(), 1000);
      this.resetButton = true;
      this.pauseButton = true;
    },
    pauseTimer() {
      this.pauseButton = false;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = true;
    },
    resetTimer() {
      this.totalTime = this.total * 60;
      clearInterval(this.timer);
      this.timer = null;
      this.resetButton = false;
      this.pauseButton = false;
    },
    padTime(time) {
      return (time < 10 ? "0" : "") + time;
    },
    countdown() {
      if (this.totalTime >= 1) {
        this.totalTime--;
      } else {
        this.totalTime = 0;
        this.resetTimer();
      }
    },
    tapTimer() {
      if (!this.pauseButton) {
        this.startTimer();
      } else {
        this.pauseTimer();
      }
    },
  },
};
</script>
