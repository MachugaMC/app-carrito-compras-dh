import * as React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ContextoCarrito } from "../context/ContextoCarrito";
import '../styles/NavbarComponent.css'

export const NavbarComponent = () => {
  const { listaDeCompras } = useContext(ContextoCarrito);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand" href="/carrito">
            Compras Online
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to={"/"}
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/carrito"}
                  className="nav-link active cart-item"
                  aria-current="page"
                  href="/"
                >
                  Carrito
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={"/carrito"} >
            <Badge badgeContent={listaDeCompras.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </NavLink>
        </div>
      </nav>
    </>
  );
};
