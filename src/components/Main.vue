<template>

    <div>
       <table class="table table-bordered">
           <tbody>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>sex</th>
                <th>操作</th>
            </tr>
           <tr v-for="item in datas">
               <td>
                   {{item.id}}
               </td>
               <td>
                   {{item.name}}
               </td>
               <td>
                   {{item.sex}}
               </td>
               <td>

                   <router-link :to="'/edit/'+item.id">
                       编辑
                   </router-link>


                   <span @click="del(item.id)">删除</span>
               </td>
           </tr>

           </tbody>
       </table>
        <router-link to="/add">添加按钮</router-link>
    </div>

</template>
<script>

    export default {
        data(){
            return {
                datas:[]
            }
        },
        mounted(){
            fetch("/api/main/select?uid="+sessionStorage.uid).then(function (e) {
                return e.json();
            }).then( (e)=> {
                this.datas=(e);
            })
        },
        methods:{
            del(id){
                fetch("/api/main/del?id="+id).then(function (e) {
                    return e.text();
                }).then((e)=>{
                    if(e=="ok"){
                            this.datas=this.datas.filter(function (item) {
                                if(item.id!=id){
                                    return item
                                }
                            })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>