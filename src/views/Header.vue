<template>
  <div id="app">
    <div id="nav">
     <div class="header" >
        <ul>
            <li> <router-link to="/"> Home</router-link></li>
            <li> <router-link to="/SignIn"> Sign In</router-link></li>
            <li><router-link to="/SignUp"> Sign Up</router-link></li>
        </ul>
    </div> 
    
    </div>
    <router-view/>
    
  </div>
</template>

<script>


export default {
  name: 'App',
 
}
</script>
<style  scoped>
ul{
     position: relative;
    top: 0px;
    float: right;
    list-style: none;
 }
 li{
     display: inline-block;
     padding:10px
 }
 a{
     text-decoration: none;
     color: gray;
 }
 a:hover{
     color: black;
 }
 
</style>