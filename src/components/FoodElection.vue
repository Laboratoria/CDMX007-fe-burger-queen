<template>
  <div class="food-election row">
    <div class="offset-m4 food-type" id="breakfast">
     <label for="breakfast"> <img class="image" id="breakfast" src="../assets/breakfast/breakfast-icon-xxxl.png" alt="breakfast-image">
      <h4><router-link to="/Breakfast"> Desayunos </router-link> </h4></label>
    </div>

    <div class="food-type offset-m4" id="meal">
      <img class="image" src="../assets/meals/meals-icon-xxxl.png" alt="meals-image">
      <h4><router-link to="/MealsMenu"> Comidas </router-link> </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FoodElection",
  //   data() {

  //   }
};
</script>

<style scoped>
 *{
  width: 100%;
  height: 0 auto;
  background-color: #242e3a;
} 

h4 {
  color: rgb(253, 253, 253);
}
.food-election {
     background-color: #242e3a;
    margin: -3% 0%;
    display: flex;
    /* -webkit-box-align: baseline; */
    -ms-flex-align: baseline;
    /* align-items: baseline; */
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    /* height: 0 auto; */
    height: -webkit-fill-available;
}

.image{
  width: 25%;
}

/* #breakfast{
    margin-right: 89%;
    margin-left: -48%;
} */
</style>


