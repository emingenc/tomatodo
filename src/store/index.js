import { reactive } from "vue";

const state = reactive({

  todos:[],
  text: '',
  step: 1,
  timeChoose: 25 ,
  isFinished:false,
  
})

const methods = {
  addTask(todo){
    if (state.todos.length < 1){
    todo ? state.todos.push(todo) : ''
    state.text = ''
  }
  },
  deleteTask(todo){
    state.todos = state.todos.filter(item => item != todo)
  }
}

const getters = {}

export default {
  state,
  methods,
  getters,
}