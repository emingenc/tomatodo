<template>
    <div :class="'q-pa-lg text-white bg-'+store.state.primary">
    <q-card flat :class="' fit bg-'+store.state.primary"   >
      
      <q-input v-if="store.state.todos.length < store.state.todoLimit" rounded standout bottom-slots
       @keyup.enter ="addNew"
                 v-model="store.state.text"
                label="Add new task" 
                style="width:100% ;"
                class="q-pt-sm top ">
            <template v-slot:prepend>
            <q-icon name="task" />
            </template>
            <template v-slot:append>
            <q-icon name="add" @click="addNew"
                                class="cursor-pointer" />
            </template>
        </q-input>
        <div v-if="store.state.todos.length != 0" class="flex justify-between">  

            <q-btn :color="store.state.secondary" 
            label="Cancel" 
            flat
            @click="store.state.addNewTodo = false" />
            
          </div>

       
    </q-card>
    
    
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
            addNew: function(){
                store.state.currentTodo = store.state.text
                store.methods.addTask(store.state.text)
                store.state.addNewTodo = false
            },
        }
    }   
}
</script>

<style>

</style>