<template>
  <div id="single-burgers" class="meals-selected">
    <div class="menu-display-space">
      <button class="single option-meal" id="single-beef-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Sencilla Res</h5>
      </button>
      <button class="single option-meal" id="single-chicken-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Sencilla Pollo</h5>
      </button>
      <button class="single option-meal" id="single-vegan-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Sencilla Vegetariana</h5>
      </button>
    </div>

    <div id="double-burgers" class="menu-display-space">
      <button class="double option-meal" id="double-beef-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Doble Res</h5>
      </button>
      <button class="double option-meal" id="double-chicken-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Doble Pollo</h5>
      </button>
      <button class="double option-meal" id="double-vegan-burger">
        <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
        <h5>Doble Vegetariana</h5>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MealsFood"
};
</script>

<style scoped>
.meals-food {
  background-color: #242e3a;
}

.option-meal {
  justify-content: space-evenly;
  display: inline-flex;
  border-radius: 10%;
  border: none;
}

.single {
  height: 34%;
  background-color: #eab126;
  margin: 2%;
  width: 28%;
}

.double {
  height: 34%;
  background-color: #ff6a5c;
  margin: 2%;
  width: 28%;
}
</style>
