<template>
  <div class="main-container">
    <div class="items-container">
      <div class="logo-title row">
        <img
          class="col m-6"
          id="sm-burger-logo"
          src="../assets/logo_burquerqueen/logo_burguer_sm.png"
          alt="logo-burgerqueen"
        >
        <h2 class="col m-6" id="kind-of-menu">{{ kindOfMenu }}</h2>
      </div>
      <br>
      <div class="options-items-food">
        <div class="meals-selected">
          <h4>Hamburguesas</h4>
          <div id="single-burgers" class="menu-display-space">
            <button class="single option-meal" @click="identifyId('ml-sh-single-beef',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Res</p>
            </button>
            <button
              class="single option-meal"
              @click="identifyId('ml-sh-single-chicken',mealsFood)"
            >
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Pollo</p>
            </button>
            <button class="single option-meal" @click="identifyId('ml-sh-single-veggie',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Sencilla Veggie</p>
            </button>
          </div>

          <div id="double-burgers" class="menu-display-space">
            <button class="double option-meal" @click="identifyId('ml-dh-double-beef',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Res</p>
            </button>
            <button
              class="double option-meal"
              @click="identifyId('ml-dh-double-chicken',mealsFood)"
            >
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Pollo</p>
            </button>
            <button class="double option-meal" @click="identifyId('ml-dh-double-veggie',mealsFood)">
              <img src="../assets/hamburguesas/single-hamburguesa-sm.png" alt>
              <p>Doble Veggie</p>
            </button>
          </div>

          <h4>Sin ingredientes</h4>
          <div class="no-ingredients">
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-onion',mealsFood)"
            >
              <img src="../assets/onion/onion_sm.png" alt="cebolla">
              <p>Cebolla</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-lettuce',mealsFood)"
            >
              <img src="../assets/lettuce/lettuce_sm.png" alt="lechuga">
              <p>Lechuga</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-tomato',mealsFood)"
            >
              <img src="../assets/tomato/tomato_sm.png" alt="jitomate">
              <p>Jitomate</p>
            </button>
            <button
              class="option-meal color-white-yellow"
              @click="identifyId('ml-ni-pickles',mealsFood)"
            >
              <img src="../assets/pickles/pickles_sm.png" alt="pepinillos">
              <p>Pepinillos</p>
            </button>
          </div>

          <h4>Ingredientes extras</h4>
          <div class="extras">
            <button class="option-meal color-yellow" @click="identifyId('ml-ex-cheese',mealsFood)">
              <img src="../assets/cheese/cheese_sm.png" alt="queso">
              <p>Queso</p>
            </button>
            <button class="option-meal color-yellow" @click="identifyId('ml-ex-egg',mealsFood)">
              <img src="../assets/egg/egg_sm.png" alt="huevo">
              <p>Huevo</p>
            </button>
          </div>

          <h4>Bebidas</h4>
          <div class="beverages">
            <button class="option-meal color-green" @click="identifyId('ml-dr-water',mealsFood)">
              <img src="../assets/water/water_bottle_sm.png" alt="agua">
              <p>Agua</p>
            </button>
            <button class="option-meal color-green" @click="identifyId('ml-dr-soda',mealsFood)">
              <img src="../assets/soda/soda_sm.png" alt="refresco">
              <p>Refresco</p>
            </button>
          </div>

          <h4>Guarniciones</h4>
          <div class="garrison">
            <button class="option-meal color-pink" @click="identifyId('ml-gr-fries',mealsFood)">
              <img src="../assets/fries/fries_sm.png" alt="papas">
              <p>Papas fritas</p>
            </button>
            <!-- En este momento este botón está generando problemas, lo comentaré en lo que descubro cuál es -->
            <!-- <button
              class="option-meal color-pink"
              @click="identifyId('ml-gr-rings',mealsFood)"
            >
              <img src="../assets/onion_rings/onion_rings_sm.png" alt="aros">
              <p>Aros de cebolla</p>
            </button>-->
          </div>
        </div>
      </div>
    </div>
    <div class="ticket-container">
      <div class="menu-options container">
        <router-link class="has-router" to="/">
          <img
            class="ticket-icons col m4 l4"
            src="../assets/menu_icons/menu_icon_sm.png"
            alt="menu-icon"
          >
        </router-link>
        <img
          class="ticket-icons col m4 l4"
          src="../assets/menu_icons/configuracion.png"
          alt="configuration-icon"
        >
        <img class="ticket-icons col m4 l4" src="../assets/logout/logout_sm.png" alt="logout-icon">
      </div>
      <h2>ORDEN</h2>
      <br>
      <div class="row text-size">
        <table>
          <tr>
            <th>Item</th>
            <th>Costo</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(item,index) in pickedItems" v-bind:key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <!-- <td>
              <i class="far fa-trash-alt" @click="deleteItemFn(index)"></i>
            </td> -->
          </tr>
          <tr>
            <td>Total</td>
            <td>{{ orderSum }}</td>
          </tr>
        </table>
      </div>
      <div class="order-confirm">
        <button class="action-button color-white-green order-buttons" @click="cancelOrder()">
          <p>Cancelar orden</p>
        </button>
        <button
          data-target="modal1"
          class="modal-trigger action-button color-white-green order-buttons"
          @click="modalFn();getDate();toPay()"
        >
          <p>
            <router-link to="/MealsMenu">Generar Ticket</router-link>
          </p>
        </button>
      </div>

      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h5>Ticket Orden</h5>
          <p>Fecha: {{ today }}</p>
          <h5>Nombre del Cliente:</h5>
          <input type="text" v-model="tickets.clientName">
          <table>
            <tr>
              <th>Item</th>
              <th>Costo</th>
            </tr>
            <tr v-for="(item,index) in pickedItems" v-bind:key="index" v-bind="tickets.order">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td :v-bind="tickets.total">
                <strong>{{ orderSum }}</strong>
              </td>
            </tr>
          </table>
        </div>
        <div class="modal-footer">
          <button
            id="send-order"
            class="modal-close waves-effect waves-green btn-flat"
            @click="saveDataOrder(),toPay()"
          >
            <img src="../assets/send/send_sm.png" alt="send-order-button">
          </button>
          <!-- <a
            href="#!"
            class="modal-close waves-effect waves-green btn-flat"
            @click="saveDataOrder(),toPay()"
          >Aceptar Orden</a>-->
          <button id="edit-order" class="modal-close waves-effect waves-green btn-flat">
            <i id="edit-icon" class="far fa-edit"></i>
          </button>
          <!-- <a href="#!" class="modal-close waves-effect waves-green btn-flat">Modificar Orden</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb, db } from "../js/firebase";
import Swal from "sweetalert2";
export default {
  name: "MealsMenu",
  data() {
    return {
      kindOfMenu: "Comida",
      mealsFood: [],
      pickedItems: [],
      mealButtons: document.getElementsByClassName("option-meal"),
      totalSum: [],
      orderSum: 0,
      today: "",
      tickets: {
        clientName: null,
        order: null,
        date: null,
        total: null
      }
    };
  },
  methods: {
    saveDataOrder() {
      db.collection("tickets")
        .add(this.tickets)
        .then(docRef => {
          alert(
            "Tu pedido ha sido enviado a cocina con el siguiente identificador: " +
              docRef.id
          );
          this.reset();
        })
        .catch(function(error) {
          if (error) {
            console.log(
              "Se produjo el siguiente error al enviar la orden: " + error
            );
          }
        });
    },
    // Esta función es para que borre los inputs, pero en esta interfaz no sé si utilizaré alguno
    reset() {
      // Object.assign(this.$data, this.$options.data.call(this));
      this.pickedItems = [];
      this.totalSum = [0];
      this.orderSum = 0;
      this.today = "";
      this.tickets.clientName= null;
      this.tickets.total= 0;
      this.tickets.order= null;
      this.tickets.date= null;
    },
    identifyId(id, data) {
      console.log(data);
      for (const item of data) {
        if (id === item.id) {
          this.pickedItems.push(item);
          this.totalSum.push(item.price);
        }
      }
      this.tickets.order = this.pickedItems;
      this.sumOfPrices(this.totalSum);
    },
    deleteItemFn(index) {
      this.pickedItems.splice(index, 1);
      this.totalSum.splice(index, 1);
      this.sumOfPrices(this.totalSum);
    },
    // deleteTicketFn(doc) {
    //   console.log("Hola, Pau <3");
    //   Swal.fire({
    //     title: "¿Estás segur@?",
    //     text: "Esta acción no podrá ser revertida",
    //     type: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Estoy segur@"
    //   }).then(result => {
    //     if (result.value) {
    //       console.log(doc);
    //       Swal.fire(
    //         "Listo!",
    //         "El elemento ha sido borrado de la cuenta",
    //         "success"
    //       );
    //     }
    //   });
    // },
    // función que ingresa el precio de cada objeto
    // en un arreglo para después sumarlo y obtener el total
    sumOfPrices(arr) {
      let sum = arr.reduce((a, b) => {
        return a + b;
      });
      this.orderSum = sum;
    },
    cancelOrder() {
      this.pickedItems = [];
      this.totalSum = [];
      this.orderSum = 0;
    },
    getDate() {
      this.today = new Date();
      let dd = this.today.getDate();
      let mm = this.today.getMonth() + 1;
      let yyyy = this.today.getFullYear();
      let hh = this.today.getHours();
      let minutes = this.today.getMinutes();
      let sec = this.today.getSeconds();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      this.today =
        dd +
        "/" +
        mm +
        "/" +
        yyyy +
        "; hora: " +
        hh +
        ":" +
        minutes +
        ":" +
        sec;
      this.tickets.date = this.today;
    },
    modalFn() {
      const elems = document.querySelectorAll(".modal");
      const instance = M.Modal.getInstance(elems);
      const instances = M.Modal.init(elems);
      // instance.open();
    },
    toPay() {
      this.totalSum.total = this.orderSum;
    }
  },
  created() {
    db.collection("foodItems")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.mealsFood.push(doc.data());
        });
      });
  }
};
</script>

<style scoped>
p {
  margin-top: 0%;
}

h3 {
  margin-top: 1%;
  margin-bottom: 2%;
}

h4 {
  color: white;
}

strong {
  font-weight: 700;
}

.main-container {
  display: flex;
  background-color: #242e3a;
  width: 100%;
  height: 0 auto;
  margin-top: -6%;
  padding-bottom: 0%;
}

.items-container {
  width: 66%;
  margin-top: 2%;
  border-right: 2px solid white;
}

.logo-title {
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
}

.ticket-container {
  width: 34%;
  margin-top: 2.7%;
  background-color: #38404a;
  color: white;
  margin-bottom: 0%;
}

.menu-options {
  background-color: #38404a;
  margin-top: 0%;
  display: flex;
  justify-content: space-around;
}

.has-router {
  display: flex;
}

.meals-selected {
  display: flex;
  flex-direction: column;
  align-items: inherit;
  flex-grow: 1;
  margin-bottom: 2%;
}

.option-meal,
.action-button {
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

.double {
  height: 34%;
  background-color: #ff6a5c;
}

.extra-options {
  background-color: #38404a;
  margin-bottom: 0%;
  padding: 5% 0%;
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
  background-color: rgb(213, 228, 173);
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

.order-buttons {
  width: 30%;
}

.modal {
  color: #242e3a;
  font-size: 2em;
}

.modal-footer {
  display: flex;
  justify-content: center;
  height: 13%;
}

#sm-burger-logo {
  width: 16%;
}

#single-burgers {
  margin-left: 0%;
}

#kind-of-menu {
  margin: 2% 0%;
}

#send-order #edit-order {
  width: 20%;
  height: 100%;
  padding: 1% 0% 8%;
}
/* 
#edit-order {
  
} */

#edit-icon {
  font-size: 3em;
  height: auto;
}
</style>

