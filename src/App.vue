<template>
    <screen-home />
</template>

<script>
import ScreenHome from "./screen/ScreenHome.vue";
export default {
    name: "App",
    components: { ScreenHome },
};
</script>

<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

@font-face {
    font-family: "Imprima-Regular";
    src: url("./assets/fonts/Imprima-Regular.ttf") format("truetype");
}
</style>
