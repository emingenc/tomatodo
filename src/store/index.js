import { reactive, watch } from "vue";

const STATE_NAME = "pomodoroState";


const defaultState = {

  todos:[],
  text: '',
  step: 1,
  totalStep: 0 ,
  session: 1,
  timeChoose: 25 ,
  isFinished:false,
  reward:null,
  primary:'indigo-3',
  secondary:'indigo-8',

  focus:25,
  short:5,
  long:15,
  isLong:false,

  reward1:"Social media",
  reward2:"Drink(Tea coffe etc)",
  reward3:"short game(mobile/pc)",
  reward4:"Short YouTube video",
  reward5:"Meditate",
  reward6:"Favorite music",
  
}
const getDefaultState = () => {
  if (localStorage.getItem(STATE_NAME) !== null) {
    return JSON.parse(localStorage.getItem(STATE_NAME));
  }

  return defaultState;
};

const state = reactive(getDefaultState());

const methods = {
  addTask(todo){
    if (state.todos.length < 1){
    todo ? state.todos.push(todo) : ''
    state.text = ''
    state.step ++
  }
  },
  setColor(color){
    state.primary = `${color}-3`
    state.secondary = `${color}-8`
  },
  deleteTask(todo){
    state.todos = state.todos.filter(item => item != todo)
    state.totalStep = state.totalStep + state.step
    state.step = 0
  }
}

const getters = {}

watch(
  () => state,
  () => {
    localStorage.setItem(STATE_NAME, JSON.stringify(state));
  },
  { deep: true }
);

export default {
  state,
  methods,
  getters,
}