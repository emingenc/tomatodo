import { reactive } from "vue";

const state = reactive({

  todos:[],
  text: '',
  step: 1,
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
  
})

const methods = {
  addTask(todo){
    if (state.todos.length < 1){
    todo ? state.todos.push(todo) : ''
    state.text = ''
    state.step = 2
  }
  },
  setColor(color){
    state.primary = `${color}-3`
    state.secondary = `${color}-8`
  },
  deleteTask(todo){
    state.todos = state.todos.filter(item => item != todo)
    state.step = 1
  }
}

const getters = {}

export default {
  state,
  methods,
  getters,
}