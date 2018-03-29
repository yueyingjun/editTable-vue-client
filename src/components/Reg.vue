<template>
    <div class="login">
        <h3>欢迎注册</h3>
        {{message}}
        <form action="/checkLogin" method="post">
            <div class="form-group">
                <label for="exampleInputEmail1">用户名</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="user" name="uname" v-model="uname" @blur="blur()">
                <span>{{message1}}</span>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">密码</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="pass" v-model="upass" @blur="blur()">
                <span>{{message2}}</span>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">确认密码</label>
                <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password" name="pass" v-model="upass1" @blur="blur()">
                <span>{{message3}}</span>
            </div>
            <button type="button" class="btn btn-default" @click="submit()">Submit</button>

            <router-link to="/login">登陆</router-link>
        </form>
    </div>

</template>
<script>
    export default {
            data(){
                return {
                    message:"",
                    message1:"",
                    message2:"",
                    message3:"",
                    uname:"",
                    upass:"",
                    upass1:""
                }
            },
            methods:{

                submit(){

                    if(this.uname==""){
                        this.message1="用户名不能为空";
                        return;
                    }

                    if(this.upass==""){
                        this.message2="密码不能为空";
                        return;
                    }
                    if(this.upass1==""){
                        this.message3="请再次输入密码";
                        return;
                    }
                    if(this.upass!==this.upass1){
                        this.message2="两次密码要一致";
                        this.message3="两次密码要一致";
                        return;
                    }

                    var params="uname="+this.uname+"&upass="+this.upass
                    fetch("/api/login/reg?"+params).then(function (e) {
                    return e.text();
                    }).then((e)=> {
                        if(e=="ok"){
                            this.message="注册成功";
                            this.uname="";
                            this.upass="";
                            this.upass1="";
                        }else{
                            this.message="注册失败";
                            this.uname="";
                            this.upass="";
                            this.upass1="";
                        }
                    })
                },

                blur(){
                    if(this.uname==""){
                        this.message1="用户名不能为空";
                        return;
                    }else{
                        this.message1=""
                    }

                    if(this.upass==""){
                        this.message2="密码不能为空";
                        return;
                    }else{
                        this.message2=""
                    }
                }
            }
    }
</script>

<style scoped>
    .login{
        width:300px;height:350px;
        position: fixed;
        left:0;right:0;bottom: 0;top:0;
        margin:auto;
        border:1px solid #ccc;
        border-radius: 15px;
        padding:30px 20px;
    }
    h3{
        text-align: center;
        padding:0;margin:0;
    }
</style>

