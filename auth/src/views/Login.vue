<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="login">
            <label>
                <input v-model="email" placeholder="email" />
            </label>
            <label>
                <input v-model="pass" placeholder="password" type="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
import auth from '@/auth.js'
export default {
    data () {
        return {
            email: 'joe@example.com',
            pass: ''
        }
    },
    mounted () {
        console.log(this.$route.query.redirect);
    },
    methods: {
        login () {
            auth.login(this.email,this.pass,(loggedIn)=>{
                console.log(loggedIn);
                if(loggedIn) {
                    auth.ok = false;
                    this.$router.replace(this.$route.query.redirect || '/')
                }
            });
            // 验证(email,pass)=>auth.login() 失败 成功=>localStorage.setItem('token',1231)
            // 1.auth.login 传参 cb
            // 2.this.$router
        }
    }
}
</script>

<style>

</style>
