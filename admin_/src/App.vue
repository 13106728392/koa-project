<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">注册</router-link>|
      <router-link to="/about">登录</router-link>|
      <router-link to="/cancellation">注销</router-link>|
      <router-link to="/tableList">用户列表</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
