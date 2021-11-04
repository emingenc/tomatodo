<template>
    <div :class="'q-pa-md text-white bg-'+store.state.primary">
    <q-card flat :class="' fit bg-'+store.state.primary"   >
        <h6 class="text-center" v-if="store.state.completedTodos.length > 2 ">
            {{store.state.completedTodos.length}} tasks completed
            <q-icon name="done " />
               
        </h6>
      <q-input v-if="store.state.todos.length < store.state.todoLimit" rounded standout bottom-slots
       @keyup.enter ="store.methods.addTask(store.state.text)"
                 v-model="store.state.text"
                label="Add task" 
                style="width:100% ;"
                class="q-pt-sm top ">
            <template v-slot:prepend>
            <q-icon name="task" />
            </template>
            <template v-slot:append>
            <q-icon name="add" @click="store.methods.addTask(store.state.text)"
                                class="cursor-pointer" />
            </template>
        </q-input>

       
    </q-card>
    <q-list  :class=" ' bg-'+store.state.primary">
        <q-slide-item @left="store.methods.addCompletedTask(todo)" 
        :class="'q-ma-md  text-center text-white bg-'+store.state.secondary"
        :style="'height:50px ;'"
        @right="store.methods.deleteTask(todo)" left-color="green" right-color="red"
        v-for="todo in store.state.todos"
          :key="todo">
        <template v-slot:left>
          <div class="row items-center">
            <q-icon left name="done" /> Done
          </div>
        </template>
        <template v-slot:right>
          <div class="row items-center">
            Delete <q-icon right name="delete" />
          </div>
        </template>

        <q-item>
          <q-item-section avatar>
            <q-icon color="primary" name="done" />
          </q-item-section>
          <q-item-section :class="'text-center text-white bg-'+store.state.secondary"><strong>{{todo}}</strong> </q-item-section>
          <q-item-section avatar>
            <p class="text-center" style="font-size: 10px ; opacity: 50%">swipe <br> right done - left delete</p> 
          </q-item-section>
        </q-item>
      </q-slide-item>
       
      </q-list>
    
    </div>
  
</template>

<script>
import {inject} from 'vue'
export default {
    name:'Todo',
    setup(){
        const store = inject('store')   


        return {
            store,
        }
    }   
}
</script>

<style>

</style>