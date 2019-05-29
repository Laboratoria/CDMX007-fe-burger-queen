<template>
  <div class="general-menu">
    <div class="update">
      <h4>Ingresa tu orden</h4>
      <input type="text" id="hamburguesa" v-model="tickets.order">
      <h4>Ingresa tu nombre</h4>
      <input type="text" id="clientName" v-model="tickets.clientName">
      <h4>Ingresa fecha</h4>
      <input type="text" id="date" v-model="tickets.date">
      <button @click="saveDataOrder">Ordenar</button>
    </div>
    <h3>Lista de productos</h3>

    <div id="single-burgers" class="menu-display-space" v-for="item in mealsFood" v-bind:key="item.id">
      <button class="single option-meal" id="single-beef-burger">
        <img :src="item.file" alt srcset>
        <h6>{{ item.name }}</h6>
      </button>
    </div>

  </div>
</template>

<script>
import { fb, db } from "../js/firebase";
export default {
  name: "GeneralMenu",
  data() {
    return {
      mealsFood: [],
      // product:{
      //   name: null,
      //   price: null
      // },
      tickets: {
        clientName: null,
        order: null,
        date: null
      }
    };
  },
  // firestore() {
  //   return {
  //     // Collection
  //     // food: fs.collection("food"),
  //     // // Doc
  //     // ford: fs.collection("cars").doc("ford")
  //   };
  // },
  methods: {
    saveDataOrder() {
      db.collection("tickets")
        .add(this.tickets)
        .then(docRef => {
          console.log("Document written with ID: ", docRef.id);
          this.reset();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      // test.firestore.js;
    },
    reset() {
      Object.assign(this.$data, this.$options.data.apply(this));
    }
  },
  created() {
    db.collection("mealsFoos")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
          this.mealsFood.push(doc.data());
          console.log(this.mealsFood);
        });
      });
  }
};
</script>

<style scoped>
h4,
h5,
h6 {
  display: -webkit-inline-box;
  font-weight: 700;
  margin-top: 0%;
}

h3 {
  margin: 0% 2%;
  font-weight: 700;
}

.update {
  width: 50%;
  background-color: #ff6a5c;
  color: aliceblue;
}

.general-menu {
  background-color: #242e3a;
  width: 100%;
}

.upper-menu {
  background-color: #38404a;
  color: rgb(251, 252, 253);
  height: 0%;
  width: 102%;
  margin-top: 0%;
}

.menu-number {
  background-color: #242e3a;
  display: -webkit-inline-box;
  margin: 0% 0% 0% 0%;
  width: 100%;
  border-bottom: 3px solid black;
}

.menu-options {
  margin: -10% 0% 0% 62%;
  width: 40%;
}

.sell-info {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  color: white;
  width: 102%;
}

.picked-items {
  width: 36%;
  background-color: #38404a;
  margin: 5.3% -2% 0% 0%;
  padding: 3% 0% 51% 0%;
  border-left: 4px solid white;
}

.ticket-icons {
  margin: 0% 10%;
  width: 10%;
}

.meals-selected {
  background-color: #242e3a;
  margin: 5.3% 0% 0% 0%;
  width: 64%;
  padding-bottom: 27%;
}

.option-meal {
  justify-content: space-evenly;
  /* display: inline-flex; */
  border-radius: 10%;
  border: none;
  margin: 2%;
  width: 22%;
}

.single {
  height: 34%;
  background-color: #eab126;
}

.double {
  height: 34%;
  background-color: #ff6a5c;
}

.menu-display-space {
  margin-left: 0%;
}

#sm-burger-logo {
  margin: 1% 0% -2% -55%;
  width: 7%;
}

#kind-of-menu {
  margin: -2% 14% 2% 5%;
}

#top-menu {
  background-color: #242e3a;
  color: #242e3a;
  margin-top: -6%;
  width: 102%;
  padding: 1% 0%;
}

#order-title {
  margin-left: 11%;
}
</style>

