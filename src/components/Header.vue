<template>

    <div class="header">
        <div class="header__left">
            <font-awesome-icon class="icons" :icon="['fas', 'bars']"  size="1x"/>
            <img src="../assets/logo.png" alt="">
        </div>
        <div class="header__rigth">
            <img src="../assets/logo-rigth.png" alt="">
            <font-awesome-icon class="calendar icons" :icon="['fas', 'calendar-plus']"  size="1x"/>
            <font-awesome-icon class="notify icons" :icon="['fas', 'bell']"  size="1x"/>
            <div class="user">
                <span>Administrador</span>
                <span>Developer</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
    .header {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 30px;
        background-color: #01449b;
        align-items: center;
    }
    .header__rigth {
        width: 50%;
        text-align: right;
        padding-right: 65px;
        display: flex;
        align-items: center;
        justify-content: end;
    }
    .header__left {
        width: 50%;
        text-align: left;
        padding-left: 5px;
        display: flex;
        align-items: center;
        justify-content: start;
    }
    .header__left img {
        max-height: 30px;
    }
    .header__rigth img {
        max-width: 50px;
        position: fixed;
        right: 10px;
        top: 2px;        
    }

    .header__left > * {
        margin-left: 5px;
    }

    .header__rigth > * {
        margin-right: 5px;
    }
    .user span {
        display: block;
        font-size: 1.1rem;
        color:rgb(95, 194, 255);
    }
    .user span:nth-child(2){
        font-weight: bold;
        color: white;
    }
    .icons {
        color: white;
    }
</style>