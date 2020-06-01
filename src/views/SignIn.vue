<template>
<div  class="SignIn"> 
    <br>
    <div class="form" >
        <h1>Sign In</h1>
       <center> <p> <router-link to="/SignUp"> Need an account ?</router-link>  </p></center>
        <router-view/>
        <center>
        <input type="text" placeholder="Email" v-model="email">

         <input type="password" placeholder="Password" v-model="password">
         </center>
         <button @click="fetchUsers()" type="button" class="btn btn-success"> Sign In </button>
     
    </div>
           
           
</div>

      
</template>

<script>

 import axios from 'axios';
export default {
name:'SignIn',
data () {
    return {
        email:"",
        password:""
           
    }
},
methods: {
    fetchUsers(){
        console.log(this.password)
axios.post(" https://conduit.productionready.io/api/users/login",{user:{email: this.email,password:this.password}})
        .then((res) => {
            console.log(res.data);
            const data = res.data;
            this.email = data.user.email;
          alert('dang nhap thanh cong');  
          this.$router.push('/LoginSuccess')
        })
         .catch(function (error) {
        console.log(error);
        alert('dang nhap khong thanh cong')
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

