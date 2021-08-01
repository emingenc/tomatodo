import { reactive } from "vue";

const state = reactive({

  todos:[],
  text: '',
  
})

const methods = {
  addTask(todo){
    state.todos.push(todo)
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