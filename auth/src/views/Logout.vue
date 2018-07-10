<template>
    <div>
        <button @click="logout">退出</button>
    </div>
</template>
<script>
import auth from '@/auth.js'
export default {
    methods:{
        logout () {
            auth.logout();
            auth.ok = true
        }
    }
}
</script>
<style>

</style>
