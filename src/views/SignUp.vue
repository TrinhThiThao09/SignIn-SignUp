<template>
<div  class="SignUp">
    <br>
    
    <div class="form" >
        <h1>Sign Up</h1>
       <center> <p>  <router-link to="/SignIn"> Have an account ?</router-link></p></center>
       <router-view/>
        <center>
            <input type="text" placeholder="UserName" v-model="username" >
        <input type="text" placeholder="Email" v-model="email">
         <input type="password" placeholder="Password" v-model="password">
         </center>
         <button @click="AddUsers()" type="button" class="btn btn-success"> Sign Up </button>
    </div>
           
           
</div>

      
</template>

<script>
import axios from 'axios';
export default {
name:'SignIn',
data () {
    return {
        username:"",
        email:"",
        password:"",

           
    }
},
methods: {
    AddUsers(){
        
axios.post(" https://conduit.productionready.io/api/users",{user:{email: this.email,password:this.password,username:this.username}})
        .then((res) => {
            console.log(res.data);  
            let a = res.data.user.username;
            console.log(a);  
            alert(`dang ky thanh cong   + ${a}`);   
            this.$router.push('/SignIn')  
        })
         .catch(function (error) {
        console.log(error);
        alert('dang ky khong thanh cong');  
  });       
    } 
}
}
 

</script>
<style scoped>


 h1{text-align: center;
    margin-top: 10%;}
 p a{ 
     text-align: center;
     color: green;
 }   
 input{
    display: block;
    margin-top: 2%;
    width: 40%;
    height: -21%;
    height: 40px;
    outline: none;
    border: gray solid 2px;
    border-radius: 10px;
    padding-left: 1%;
 }
 button{
     margin-top: 15px;
     float: right;
     position: relative;
     right: 30%;
     outline: none;
 }
</style>>

