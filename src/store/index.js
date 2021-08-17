import { reactive } from "vue";

const state = reactive({

  todos:[],
  text: '',
  step: 1,
  timeChoose: 25 ,
  isFinished:false,
  reward:null,
  primary:'blue-3',
  secondary:'blue-7',

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