import React from "react"
import "../css/Venue.css"

import Layout from "../components/layout"
import Navigation from "../components/Navigation/Navigation"
import Footer from "../components/Footer/Footer"

import bg from "../../src/images/fiona.jpg"

var bgStyle = {
  backgroundImage: "url(" + bg + ")",
}

const TheBull = () => (
  <Layout>
    <div
      className="bg-img1 size1 overlay1 p-b-35 p-l-15 p-r-15"
      style={bgStyle}
    >
      <Navigation />
      <div className="container text-center text-white mt-2">
        <div className="row">
          <div className="col">
            <h1 className="venue-header">The Bull Public House</h1>
          </div>
        </div>
        <div className="container pt-5">
          <div className="row">
            <div className="col-md-6 col-sm-12 pt-2">
              <h3 className="pb-2">Address</h3>
              <p>Guntons Road,</p>
              <p>Newborough,</p>
              <p>Peterborough,</p>
              <p>PE6 7QW</p>
            </div>
            <div className="col-md-6 col-sm-12 pt-2">
              <h3 className="pb-2">Opening Times</h3>
              <p>
                Monday<strong> 09.00 - 17.00</strong>
              </p>
              <p>
                Tuesday<strong> 07.00 - 17.00</strong>
              </p>
              <p>
                Wednesday<strong> 09.00 - 17.00</strong>
              </p>
              <p>
                Thursday<strong> 09.00 - 22.00</strong>
              </p>
              <p>
                Friday<strong> 09.00 - 17.00</strong>
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6 col-sm-12 pt-2">
              <img
                className="venue-img"
                src={require("../images/thebull.jpg")}
                alt="venue-img"
              />
            </div>
            <div className="col-md-6 col-sm-12 pt-2">
              <iframe
                title="venue map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.124209046251!2d-0.22502868399500656!3d52.63966893510587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877f71572e2093d%3A0x4d12ccb9b3bd5d2b!2sThe+Bull%2C+Guntons+Rd%2C+Newborough%2C+Peterborough+PE6+7QW!5e0!3m2!1sen!2suk!4v1552404076510"
                width={500}
                height={350}
                frameborder={0}
                style={{ border: 0 }}
                allowfullscreen
              />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>See You There!</h1>
                <a className="btn btn-outline-light mt-4" href="/">
                  Go Back
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </Layout>
)

export default TheBull
