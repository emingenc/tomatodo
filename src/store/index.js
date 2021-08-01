import { reactive } from "vue";

const state = reactive({

  todos:[],
  text: '',
  step: 1,
  done1: false,
  done2: false,
  done3: false,
  done4: false,
  
})

const methods = {
  addTask(todo){
    todo ? state.todos.push(todo) : ''
    state.text = ''
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