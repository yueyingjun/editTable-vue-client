<template>
    <div>

        <router-link to="/">首页</router-link>
        <span>欢迎{{uname}}进入个人中心</span>
        <span @click="logout">退出</span>
    </div>
</template>


<script>
    export default {
        name: 'hello',
        data() {
            return {}
        },
        methods:{
            logout(){
                sessionStorage.removeItem("uid");
                sessionStorage.removeItem("uname");
                sessionStorage.removeItem("login");
                this.$router.push("/login");
                this.$store.commit("setLogin","");
            }
        },
        computed:{
            uname(){
                return this.$store.state.uname;
            }
        }
    }
</script>

<style scoped>

</style>