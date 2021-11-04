<template> 
<div
    @dblclick="this.store.state.step ++"  
    :class="this.$q.screen.xs ? ('fit q-pa-lg' ) : 'q-pa-xl' "
    :style="this.$q.screen.xs ? ('' ) : 'margin-right: auto; margin-left: auto;  width:61.8%' ">
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