<template> 
<div>

<Todo />
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