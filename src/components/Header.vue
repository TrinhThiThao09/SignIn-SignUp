<template>
  <div id="app">
    <header>
      <ul>
        <li :class="{ active: isActiveHome }" @click="activeHome">
          <router-link to="/Home">Home</router-link>
        </li>
        <li :class="{ active: isActiveSignIn }" @click="activeSignIn">
          <router-link to="/SignIn">Sign In</router-link>
        </li>
        <li :class="{ active: isActiveSignUp }" @click="activeSignUp">
          <router-link to="/SignUp">Sign Up</router-link>
        </li>
      </ul>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isActiveHome: true,
      isActiveSignIn: false,
      isActiveSignUp: false,
    };
  },
  methods: {
    activeHome() {
      this.isActiveHome = true;
      this.isActiveSignIn = false;
      this.isActiveSignUp = false;
    },
    activeSignIn() {
      this.isActiveHome = false;
      this.isActiveSignIn = true;
      this.isActiveSignUp = false;
    },
    activeSignUp() {
      this.isActiveHome = false;
      this.isActiveSignIn = false;
      this.isActiveSignUp = true;
    },
  },
};
</script>
<style scoped>
.active {
  font-weight: bold;
  color: black;
}
ul {
  position: relative;
  top: 30px;
  list-style: none;
  right: 30px;
}
li {
  display: inline-block;
  padding: 10px;
}
a {
  text-decoration: none;
  color: #0000008c;
  font-size: 22px;
}

header {
  display: flex;
  justify-content: flex-end;
}
</style>
