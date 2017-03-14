<template>
    <div id="app">
        <div>
            {{data}}
        </div>
    </div>
</template>

<script>
   import Labels from './components/Labels.vue'
   export default {
    name: "app",
    data () {
        return {
            data:"dddd"
        }
    },
    mounted:function(){
        var _self  = this;
    },
    components:{ Labels },
    methods: {

    }
   }
</script>