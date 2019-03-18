import React from "react"

import Layout from "../components/layout"

import "../css/main.css"
import "../css/util.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../fonts/font-awesome-4.7.0/css/font-awesome.min.css"
import "../vendor/animate/animate.css"
import "../vendor/select2/select2.min.css"
import "../css/sidenav.css"

import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Main from "../components/Main/Main"
import Countdown from "../components/Countdown/Countdown"
import PostCode from "../components/PostCode/PostCode"

import bg from "../../src/images/fiona.jpg"

var $ = require("jquery")
global.jQuery = $

var bgStyle = {
  backgroundImage: "url(" + bg + ")",
}

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="bg-img1 size1 overlay1 p-b-35 p-l-15 p-r-15"
          style={bgStyle}
        >
          <Navigation />
          <div className="row mb-5 pb-5">
            <div className="col-2 pt-5 d-none d-lg-block text-center">
              <div className="pl-2 ">
                <h2 className="text-white pb-4">Your Signing Stations</h2>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/werrington">
                    Werrington Library
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/bretton">
                    Bretton Library
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/stluke">
                    St Luke's Church
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/petetown">
                    Peterborough Town Hall
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/eastcentre">
                    East Community Centre
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/dogsthorpe">
                    Dogsthorpe Library
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/eyecentre">
                    Eye Community Centre
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links text-center" href="/bedford">
                    Bedford Hall in Thorney
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/honeyhill">
                    Honeyhill Centre
                  </a>
                </li>
                <li className="side-nav-surround">
                  <a className="side-nav-links" href="/thebull">
                    The Bull
                  </a>
                </li>
              </div>
            </div>
            <div className="col-lg-10 col-md-12">
              <div className="flex-col-c p-t-60 p-b-60 respon1">
                <Header />
                <Main />
                <Countdown />
                <PostCode />
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}
export default Home

/*







*/
