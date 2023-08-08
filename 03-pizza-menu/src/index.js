import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import CardProfile from "./Challenges/challenge01/CardProfile";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <>
      <Header />
      <Menu />
      <Footer />

      {/* <CardProfile/> */}
     
    </>
  );
}

function Header() {
  return (
    <div className="header">
      <h1>Fast React Pizaa Co.</h1>
    </div>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
    

      {numPizza > 0 ?
      
      <>
      
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. all from
        our stone oven, all organic, all delicious.
      </p>

      <ul className="pizzas">
      
          {pizzaData.map((pizza) => {
            return <Pizza key={pizza.name} pizza={pizza} />;
          })}
       
      </ul> </>: (
         
        <p>we're still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
function Pizza({ pizza }) {
  return  (
    <li className={`pizza ${pizza.soldOut ? 'sold-out':''}`}>
      <img src={pizza.photoName} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price + 3}</span>
      </div>
    </li>
  ) 
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 6;
  const closeHour = 17;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>we're open until {closeHour}:00. Come visit us or order online.</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p className="order">
          we're happy to welcome you between {openHour}:00 and {closeHour}:00.{" "}
        </p>
      )}
    </footer>
  );
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
