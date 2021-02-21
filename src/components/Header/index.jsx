/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import { Link } from 'react-router-dom'

import './styles.css'

function Header() {
    return(
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top JustifyHeader">
                <Link className="navbar-brand" to="/#img">
                    <img className="logo" src={require("../../assets/images/logo.png").default} alt="Conscire Logo"/>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">                  
                    <li className="nav-item">
                        <a className="nav-link" href="/#about">Sobre</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#projeto">Nosso Projeto</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#cards">O que temos</a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contato">Contato</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cadastro">Cadastre-se</Link>
                    </li>
                    </ul>
                        <button className="btn btn-warning text-white btn-lg" type="submit">
                            <Link className="text-light" to="/login">Login</Link>
                        </button>
                </div>
            </nav>
    )
}

export default Header