<template>
    <div class="q-pa-sm row items-start flex flex-center text-white ">
    <q-card flat class="bg-red-3   " style="width:90% ; ">
      
      <q-input v-if="store.state.todos.length < 1" rounded standout bottom-slots
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