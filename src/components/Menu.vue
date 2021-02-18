<template>

    <div class="menu">
        <div class="menu__info">
            <span>
                <font-awesome-icon class="icons" :icon="['fab', 'avianex']"  size="1x"/>
                Oportunidades
            </span>
            <span>
                107 Registros
            </span>    
        </div>
        <div class="menu__principal">
            <a href="#">Vigetes</a>
            <a href="#">Recuperacion Cliente</a>
            <a href="#">Rechazadas</a>
            <a href="#">Perdidas</a>
            <a href="#">Concretadas</a>
            <a href="#">
                <font-awesome-icon class="icons" :icon="['fas', 'plus-circle']"  size="1x"/>
                Crear oportunidad
            </a>
        </div>
        <div class="menu__detalles">
            <div class="values">
                <p>
                    <span>85</span>
                    Empresas
                </p>
                <p>
                    <span>107</span>
                    Oportunidades
                </p>
                <p>
                    <span>1.454.191,63 Usd</span>
                    Mensuales
                </p>
                <p>
                    <span>4.205,00 Usd</span>
                    Gastos
                </p>
            </div>
            <div class="statistics">
                <h5>Probabilidad</h5>
                <div class="statistics-content">
                    <p>
                        <font-awesome-icon class="arrow" :icon="['fas', 'arrow-down']"  size="1x"/>
                        <span>28%</span>
                        <span>Baja</span>
                    </p>
                    <p>
                        <font-awesome-icon class="arrow" :icon="['fas', 'arrow-right']"  size="1x"/>
                        <span>41.1%</span>
                        <span>Media</span>
                    </p>
                    <p>
                        <font-awesome-icon class="arrow" :icon="['fas', 'arrow-up']"  size="1x"/>
                        <span>30.8%</span>
                        <span>Alta</span>
                    </p>
                </div>
            </div>
            <div class="filters">
                <button>FILTRAR</button>
            </div>
        </div>
        <div class="menu__opciones">
            <a href="#">
                Todo
                <font-awesome-icon class="icons" :icon="['fas', 'th-list']"  size="1x"/>
            </a>
            <a href="#">
                Identificacion
                <font-awesome-icon class="icons" :icon="['fas', 'id-badge']"  size="1x"/>
            </a>
            <a href="#">
                Informacion
                <font-awesome-icon class="icons" :icon="['fas', 'info']"  size="1x"/>
            </a>
            <a href="#">
                Estudio Interno
                <font-awesome-icon class="icons" :icon="['fab', 'studiovinari']"  size="1x"/>
            </a>
            <a href="#">
                Innovacion & desarrollo
                <font-awesome-icon class="icons" :icon="['fas', 'dungeon']"  size="1x"/>
            </a>
            <a href="#">
                Oferta
                <font-awesome-icon class="icons" :icon="['fas', 'plus-circle']"  size="1x"/>
            </a>
            <a href="#">
                Muestra
                <font-awesome-icon class="icons" :icon="['fas', 'th-list']"  size="1x"/>
            </a>
            <a href="#">
                Negociacion
                <font-awesome-icon class="icons" :icon="['fas', 'plus-circle']"  size="1x"/>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Menu'
}
</script>
<style scoped>
    .menu {
        display: flex;
        flex-direction: column;
        margin: 30px;
    }
    .menu__info {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
        font-size: 1.2rem;
        color: #01449b;
    }
    .menu__info span:nth-child(1) {
        font-weight: bold;
        font-size: 1.3rem;
        width: 20%;
        align-self: flex-end;
    }
    .menu__info span:nth-child(2){
        border-bottom: 1px solid #0871fa;
        width: 80%;
        text-align: end;
    }
    .menu__principal {
        height: 50px;
        padding: 0 40px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu__principal a {
        color: #01449b;
        font-size: 1.2rem;
        font-weight: 500;
    }
    .menu__principal a:nth-child(-n+5) {
        border-right: 1px solid #01449b;
        padding: 0 15px;
    }
    .menu__principal a:nth-child(6) {
        padding: 0 15px;
    }
    .menu__detalles {
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .menu__detalles .values{
        background: #042566;
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .menu__detalles .values p {
        text-align: center;
        font-size: 1rem;
        color: #74a7e9;
        padding: 5px;
    }
    .menu__detalles .values p span {
        color: white;
        font-size: 1.3rem;
        display: block;
        font-weight: bold;
    }
    .menu__detalles .statistics {
        width:30%;
        height: 100%;
        background: #d4d4d4;
    }
    .menu__detalles .statistics h5 {
        text-align: center;
        color: #042566;
        font-size: 1.1rem;
    }
    .statistics-content {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .statistics-content p{
        width: 32%;
        padding: 3px;
        display: grid;
        grid-template-areas: "icons percentage"
                            "calification calification"
        ;
        color: #042566;
    }
    .statistics-content p .arrow{
        grid-area: icons;
        text-align: center;
        color: rgb(24, 167, 36);
    }
    .statistics-content p span:nth-child(2) {
        grid-area: percentage;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: right;
    }
    .statistics-content p span:nth-child(3) {
        grid-area: calification;
        grid-column-end: 100%;
        font-size: 1rem;
        text-align: center;
    }
    .menu__detalles .filters {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu__detalles .filters button {
        color: white;
        background: green;
        border: green;
        padding: 10px;
        border-radius: 5px;
    }
    .menu__opciones {
        margin-top: 10px;
        height: 30px;
        border: 1px solid #01449b;
        color: #3e5e88;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .menu__opciones a {
        font-size: 1.2rem;
        padding: 0 5px;
    }
    .menu__opciones a:nth-child(-n+7) {
        border-right: 1px solid #01449b;
    }
    .menu .icons {
        color: #01449b;
    }
    a {
        text-decoration: none;
    }
</style>