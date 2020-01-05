<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");

html,
body {
  background-color: #f5f5f5;
}

body {
  border-top: 4px solid rgba(0, 0, 0, 0.9);
}

#app {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #484848;
  background-color: #f5f5f5;
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

label {
  font-weight: bold;
  color: rgba(0, 0, 0, 0.9);
}

.box {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
  background-color: rgba(255, 255, 255, 0.95);
  padding-top: 15px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  margin-bottom: 15px;
}
</style>
