import React from "react";
import "./style.css";
import CashContainer from "../CashContainer";



const Header = () => {

  return (
    <div className="container">

      <div className="menu">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
        </svg>
      </div>
      <div className="listTitle">
        <h2>Compra de Supermercado</h2>
      </div>
 
      <CashContainer />
    </div>
  );
};
export default Header;
