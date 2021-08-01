<template>
    <div class="q-pa-sm row items-start flex flex-center text-white ">
    <q-card flat class="bg-red-4   " style="width:90% ; height:400px">
      
      <q-input rounded standout bottom-slots
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

        <q-list style="width:100%;" class="justify-around">
        <q-item tag="label" class="q-pa-md "  v-ripple
        v-for="todo in store.state.todos" :key="todo">
            <q-item-section side top>
            <q-checkbox v-model="check1" />
            </q-item-section>

            <q-item-section>
            <q-item-label>{{todo}}</q-item-label>
            </q-item-section>
            <q-item-section top side>
          <div class="text-grey-8 q-gutter-xs">
            <q-btn class="gt-xs" size="12px" color='white' 
            @click="store.methods.deleteTask(todo)"
            flat dense round icon="delete" />
          </div>
        </q-item-section>
        </q-item>

      </q-list>
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