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
          <h4>Sandwich</h4>
          <div id="single-burgers" class="menu-display-space">
            <button class="double option-bf" @click="identifyId('bf-sn-sandwitch',brkfstFood)">
              <img src="../assets/sandwitch/sandwitch_sm.png" alt>
              <p>Sandwich</p>
            </button>
          </div>

          <h4>Sin ingredientes</h4>
          <div class="no-ingredients">
            <button
              class="option-bf color-white-yellow"
              @click="identifyId('bf-ex-onion',brkfstFood)"
            >
              <img src="../assets/onion/onion_sm.png" alt="cebolla">
              <p>Cebolla</p>
            </button>
            <button
              class="option-bf color-white-yellow"
              @click="identifyId('bf-ni-lettuce',brkfstFood)"
            >
              <img src="../assets/lettuce/lettuce_sm.png" alt="lechuga">
              <p>Lechuga</p>
            </button>
            <button
              class="option-bf color-white-yellow"
              @click="identifyId('bf-ni-tomato',brkfstFood)"
            >
              <img src="../assets/tomato/tomato_sm.png" alt="jitomate">
              <p>Jitomate</p>
            </button>
            <button
              class="option-bf color-white-yellow"
              @click="identifyId('bf-ni-cheese',brkfstFood)"
            >
              <img src="../assets/cheese/cheese_sm.png" alt="queso">
              <p>Queso</p>
            </button>
          </div>

          <h4>Bebidas</h4>
          <div class="beverages">
            <button
              class="option-bf color-green"
              @click="identifyId('bf-dr-milky-coffee',brkfstFood)"
            >
              <img src="../assets/milky_coffee/milky_coffee_sm.png" alt="mily-coffee">
              <p>Café lechero</p>
            </button>
            <button
              class="option-bf color-green"
              @click="identifyId('bf-dr-dark-coffee',brkfstFood)"
            >
              <img src="../assets/black_coffee/coffee_sm.png" alt="clack-coffee">
              <p>Café negro</p>
            </button>
            <button class="option-bf color-green" @click="identifyId('bf-dr-juice',brkfstFood)">
              <img src="../assets/orange_juice/orange_juice_sm.png" alt="juice">
              <p>Jugo</p>
            </button>
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
            <!-- <th>#</th> -->
            <th>Item</th>
            <th>Costo</th>
            <th>Opciones</th>
          </tr>
          <tr v-for="(item,index) in pickedItems" v-bind:key="index">
            <!-- <td>{{ index }}</td> -->
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>
              <i class="far fa-trash-alt" @click="deleteItemFn(index)"></i>
            </td>
          </tr>
          <tr>
            <!-- <td></td> -->
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
            Generar Ticket
            <!-- <router-link to="/MealsMenu">Generar Ticket</router-link> -->
          </p>
        </button>
      </div>

      <div id="modal1" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h5>Ticket Orden</h5>
          <p>Fecha: {{ today }}</p>
          <h5>Nombre del Cliente:</h5>
          <input type="text" v-model="bfTickets.clientName">
          <table>
            <tr>
              <th>Item</th>
              <th>Costo</th>
            </tr>
            <tr v-for="(item,index) in pickedItems" v-bind:key="index" v-bind="bfTickets.order">
              <td>{{ item.name }}</td>
              <td>{{ item.price }}</td>
            </tr>
            <tr>
              <td>
                <strong>Total</strong>
              </td>
              <td :v-bind="bfTickets.total">
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
  name: "Breakfast",
  data() {
    return {
      kindOfMenu: "Desayuno",
      brkfstFood: [],
      pickedItems: [],
      bfButtons: document.getElementsByClassName("option-bf"),
      totalSum: [],
      orderSum: 0,
      today: "",
      bfTickets: {
        clientName: null,
        order: null,
        date: null,
        total: null
      }
    };
  },
  methods: {
    saveDataOrder() {
      db.collection("bfTickets")
        .add(this.bfTickets)
        .then(docRef => {
          alert(
            "Tu pedido ha sido enviado a cocina con el siguiente identificador: " +
              docRef.id
          );
          this.reset();
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
    // Esta función es para que borre los inputs, pero en esta interfaz no sé si utilizaré alguno
    reset() {
      // Object.assign(this.$data, this.$options.data.apply(this));
      this.pickedItems = [];
      this.totalSum = [0];
      this.orderSum = 0;
      this.today = "";
      this.bfTickets.clientName= null;
      this.bfTickets.total= 0;
      this.bfTickets.order= null;
      this.bfTickets.date= null;
    },
    identifyId(id, data) {
      for (const item of data) {
        if (id === item.id) {
          this.pickedItems.push(item);
          this.totalSum.push(item.price);
        }
      }
      this.bfTickets.order = this.pickedItems;
      this.sumOfPrices(this.totalSum);
    },
    deleteItemFn(index) {
      this.pickedItems.splice(index, 1);
      this.totalSum.splice(index, 1);
      this.sumOfPrices(this.totalSum);
    },
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
      this.bfTickets.date = this.today;
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
    db.collection("breakfastItems")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.brkfstFood.push(doc.data());
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
  /* height: -webkit-fill-available; */
  padding-bottom: 0%;
}

.items-container {
  width: 66%;
  margin-top: 2%;
  border-right: 2px solid white;
  margin-bottom: 10%;
  height: -webkit-fill-available;
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
  padding-bottom: 43%;
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

.option-bf,
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

