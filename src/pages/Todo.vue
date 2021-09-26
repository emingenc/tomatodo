<template>
<div >

<Todo :class="'full-height bg-'+store.state.primary" style="height:100% "/>
</div>
  
</template>

<script>
import {inject} from 'vue'
import Todo from "components/Todo.vue";
export default {
    components: {
    Todo,
  },
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