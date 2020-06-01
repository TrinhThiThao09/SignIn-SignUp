<template>
  <div id="app">
    <br />
    <form action="">
      <center>
        <h1>Sign In</h1>
        <p><router-link to="/SignUp">Need an Account?</router-link></p>
        <input type="text" placeholder="Email" v-model="email" />
        <input type="password" placeholder="PassWord" v-model="password" />
        <button type="button" @click="checkAccount">Sign In</button>
      </center>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    checkAccount() {
      axios
        .post("https://conduit.productionready.io/api/users/login", {
          user: {
            email: this.email,
            password: this.password,
          },
        })
        .then((res) => {
          console.log(res);
          alert("Dang nhap thanh cong");
          this.$router.push("/LoginSuccess");
        })
        .catch(function(error) {
          console.log(error);
          alert("dang nhap khong thanh cong");
        });
    },
  },
};
</script>
<style scoped>
input {
  display: block;
  border: 1px solid #00000036;
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px;
  outline: none;
  width: 40%;
}
button {
  padding: 12px 20px;
  background: #96d196;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  position: relative;
  right: -17%;
  margin-top: 20px;
  outline: none;
  transition: 0.5s;
}
button:hover {
  background: #008000b0;
}
p a {
  color: #008000b0;
}
</style>
