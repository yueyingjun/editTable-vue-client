<template>
    <div>
         {{message}}
    <form action="">

        姓名: <input type="text" v-model="name"><br>
        sex: 男：<input type="radio" v-model="sex"  name="sex" value="man">
             女：<input type="radio" v-model="sex" name="sex" value="woman"><br>

        <input type="button" value="提交" @click="submit()">
    </form>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data() {
            return {
                name:"",
                sex:"",
                message:""
            }
        },
        methods:{
            submit(){
                var params="name="+this.name+"&sex="+this.sex+"&uid="+sessionStorage.uid
                fetch("/api/main/add?"+params).then(function (e) {
                    return e.text();
                }).then( (e)=> {
                    if(e=="ok"){
                        this.message="成功";
                        this.name="";
                        this.sex="";
                    }else{
                        this.message="失败";
                        this.name="";
                        this.sex="";
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>