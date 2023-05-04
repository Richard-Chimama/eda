import React from 'react'
import Footer from '../Components/Footer/Footer'
import Nav from '../Components/Nav/Nav'
import { Link } from 'react-router-dom'

const FirstPage = () => {
  return (
    <div>
      <Nav />
      <section style={{ height: "100vh" }}>
        <h1>
          Bienvenue au projet <b>Eda</b>
        </h1>
        <br />
        <br />
        <p>Pour gére votre hôpital et vos donné, créez un compte</p>
        <Link to="/enregistrer">
          <button>Commencer</button>
        </Link>

        <br />
        <br />
        <i style={{color:"red"}}>This page is under development 😉</i>
      </section>
      <Footer />
    </div>
  );
}

export default FirstPage