<template>
    <div>
         {{message}}
    <form action="">

        姓名: <input type="text" v-model="name"><br>
        sex: 男：<input type="radio" v-model="sex"  name="sex" value="man">
             女：<input type="radio" v-model="sex" name="sex" value="woman"><br>

        <input type="button" value="提交" @click="edit()">
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
        mounted(){

            fetch("/api/main/edit?id="+this.$route.params.id).then(function (e) {
                return e.json();
            }).then( (e)=> {
                this.name=e.name;
                this.sex=e.sex;
            })

        },
        methods:{

            edit(){
                var params="name="+this.name+"&sex="+this.sex+"&id="+this.$route.params.id
                fetch("/api/main/editCon?"+params).then(function (e) {
                    return e.text();
                }).then( (e)=> {
                    if(e=="ok"){
                        this.message="修改成功"
                    }else{
                        this.message="修改失败"
                    }
                })
            }
        }

    }
</script>

<style scoped>

</style>