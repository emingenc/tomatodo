import { reactive, watch } from "vue";

const STATE_NAME = "pomodoroState";


const defaultState = {

  todos:[],
  completedTodos:[],
  currentTodo: null,
  text: '',
  step: 0,
  todoLimit:10,
  point:0,
  totalStep: 0 ,
  session: 1,
  timeChoose: 25 ,
  isFinished:false,
  reward:null,
  primary:'red-3',
  secondary:'red-8',
  addNewTodo:false,

  focus:25,
  short:5,
  long:15,
  isLong:false,

  reward1:"Social media",
  reward2:"Drink(Tea coffe etc)",
  reward3:"short game",
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
    if (state.todos.length < state.todoLimit){
    todo ? state.todos.push(todo) : ''
    state.text = ''
  }
  },
  deleteTask(todo){
    state.todos = state.todos.filter(item => item != todo)
    state.totalStep = state.totalStep + state.step
    if (state.currentTodo == todo){
      state.currentTodo = null
    }
  },
  addCompletedTask(todo){
    todo ? state.completedTodos.push(todo) : ''
    methods.deleteTask(todo)
  },
  setColor(color){
    state.primary = `${color}-3`
    state.secondary = `${color}-8`
  },
  
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