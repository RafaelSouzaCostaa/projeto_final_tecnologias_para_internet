<template>
    <div id="screen_home">
        <header>
            <h5>Noticias</h5>
        </header>
        <div id="menu_btns">
            <button class="btn" @click="alertar('Mais Goiás')">
                Mais Goiás
            </button>
            <button class="btn" @click="alertar('O Globo')">O Globo</button>
            <button class="btn" @click="alertar('G1')">G1</button>
            <button class="btn" @click="alertar('Record')">Record</button>
            <button class="btn" @click="alertar('SBT')">SBT</button>
        </div>
    </div>
</template>

<script>
import router from "../routes/router";

export default {
    data() {
        return {};
    },
    methods: {
        alertar(props) {
            alert(props);
            router.push({ name: "teste" });
        },
    },
};
</script>

<style scoped>
#screen_home {
    width: 90vw;
    height: 90vh;
    background-color: #f1f1f1;
    border-radius: 30px;
    box-shadow: 2px 10px 20px 10px rgba(0, 0, 0, 0.2);
}

header {
    width: 90vw;
    height: 8vh;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #4b4b4b;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    font-family: "Imprima-Regular";
    font-size: 15pt;
}

.btn {
    box-sizing: border-box;
    width: 238px;
    height: 35px;
    margin: 25px 50px 25px 50px;
    background: #c9c9c9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    color: #301010;
    font-family: "Imprima-Regular";
    font-size: 15pt;
}

.btn:hover {
    background: #999999;
    border: 1px solid #747474;
    box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

#menu_btns {
    width: 90vw;
    display: flex;
    justify-content: space-around;
}
</style>
