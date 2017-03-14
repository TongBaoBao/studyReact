<template>
    <div id="labels" class="clearFix">
        <label v-if="rsType=='2'" class="doctorLabel">{{content}}</label>
        <label v-if="rsType=='1'" class="patientLabel">{{content}}</label>
    </div>
</template>

<script>
    export default{
        props:["rsType","content"]
    }
</script>