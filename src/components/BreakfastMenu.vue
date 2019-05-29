<template>
  <div class="container">
    <div class="items-container">
      <div class="logo-title row">
        <img
          class="col m-6"
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h4 class="col m-6" id="kind-of-menu">{{ kindOfMenu }}</h4>
      </div>
      <br>
      <div class="menu-number">
        <h3>1</h3>
        <h3>2</h3>
        <h3>3</h3>
        <h3>4</h3>
        <h3>5</h3>
        <h3>6</h3>
        <h3>7</h3>
        <h3>8</h3>
        <h3>9</h3>
        <h3>0</h3>
      </div>
      <div class="options-items-food">
        <div class="breakfast-selected">
          <div class="menu-display-space">
            <button class="option-breakfast sandwitch" id="sandwitch">
              <img src="../assets/sandwitch/sandwitch_sm.png" alt="sandwitch">
              <p>Sandwitch</p>
            </button>
          </div>

          <div class="brakfast-beverages">
            <button class="option-breakfast color-green">
              <img src="../assets/orange_juice/orange_juice_sm.png" alt="jugo">
              <p>Jugo</p>
            </button>
            <button class="option-breakfast color-green">
              <img src="../assets/black_coffee/coffee_sm.png" alt="café-negro">
              <p>Café Negro</p>
            </button>
            <button class="option-breakfast color-green">
              <img src="../assets/milky_coffee/milky_coffee_sm.png" alt="café-lechero">
              <p>Café con Leche</p>
            </button>
          </div>

          <div class="no-ingredients">
            <button class="option-breakfast color-white-yellow">
              <img src="../assets/onion/onion_sm.png" alt="cebolla">
              <p>Cebolla</p>
            </button>
            <button class="option-breakfast color-white-yellow">
              <img src="../assets/lettuce/lettuce_sm.png" alt="lechuga">
              <p>Lechuga</p>
            </button>
            <button class="option-breakfast color-white-yellow">
              <img src="../assets/tomato/tomato_sm.png" alt="jitomate">
              <p>Jitomate</p>
            </button>
            <button class="option-breakfast color-white-yellow">
              <img src="../assets/cheese/cheese_sm.png" alt="queso">
              <p>Queso</p>
            </button>
          </div>
        </div>
      </div>
      <div class="extra-options">
        <button class="option-breakfast color-white-pink">
          <p>Platillo</p>
        </button>
        <button class="option-breakfast color-green">
          <p>Bebidas</p>
        </button>
        <!-- <button class="option-meal color-pink">
          <p>Guarnición</p>
        </button>-->
        <button class="option-breakfast color-white-yellow">
          <p>Sin Ingredientes</p>
        </button>
        <button class="option-breakfast color-white-green">
          <p>OK</p>
        </button>
        <!-- <button class="option-meal color-yellow">
          <p>Extra</p>
        </button>-->
      </div>
    </div>
    <div class="ticket-container">
      <h2>ORDEN</h2>
      <br>
      <div class="row text-size">
        <p class="col m4">#</p>
        <p class="col m4">Item</p>
        <p class="col m4">Orden</p>
      </div>
      <div class="order-confirm">
        <button class="option-breakfast color-white-green order-buttons">
          <p>Cancelar orden</p>
        </button>
        <button class="option-breakfast color-white-green order-buttons">
          <p>Confirmar orden</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreakfastMenu",
  data() {
    return {
      kindOfMenu: "Comida"
    };
  }
};
</script>

<style scoped>
p {
  margin-top: 0%;
}

h3 {
  margin-top: 1%;
  margin-bottom: 3%;
}

.container {
  display: flex;
  background-color: #242e3a;
  width: 100%;
  height: 0 auto;
  margin-top: -6%;
}

.items-container {
  width: 66%;
  margin-top: 2%;
  border-right: 2px solid white;
}

.logo-title {
  height: 8%;
  color: white;
  background-color: #38404a;
  margin: 1% 0%;
}

.menu-number {
  background-color: #242e3a;
  margin: -6% 0% 5% 0%;
  width: 100%;
  border-bottom: 1px solid black;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  color: white;
  height: 9%;
}

.ticket-container {
  width: 34%;
  margin-top: 2%;
  background-color: #38404a;
  color: white;
  margin-bottom: -1%;
}

.breakfast-selected {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  flex-grow: 1;
  margin-bottom: 25%;
}

.option-breakfast {
  justify-content: space-evenly;
  border-radius: 10%;
  border: none;
  margin: 2%;
  width: 17%;
  font-size: 1.3em;
  font-weight: 500;
  margin: -1% 2% 2% 1%;
}

.menu-display-space {
  margin-bottom: 1%;
}

.single {
  height: 34%;
  background-color: #eab126;
}

#sandwitch {
  height: 34%;
  background-color: #ff6a5c;
}

.extra-options {
  background-color: #38404a;
  margin-bottom: 0%;
  padding: 5% 0%;
}

.options-itmes-food {
  margin-bottom: 3%;
}

.color-white-pink {
  background-color: rgb(231, 209, 229);
}

.color-green {
  background-color: #20948b;
}

.color-pink {
  background-color: #c08dba;
}

.color-white-green {
  background-color: #A4D4B4;
}

.color-yellow {
  background-color: #eddd4c;
}

.color-white-yellow {
  background-color: #dad87a;
}

.text-size {
  font-size: 1.4em;
}

.order-confirm {
  margin-top: 129%;
}

.order-buttons {
  width: 30%;
}

#sm-burger-logo {
  width: 9%;
}

#single-burgers {
  margin-left: 0%;
}

#kind-of-menu {
  margin: 0%;
}
</style>

