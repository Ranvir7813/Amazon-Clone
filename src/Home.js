import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1111"
            title="The Lean Startup : How Constant Innovation Creates Radically Successful Business PaperBack"
            price={13.98}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="1112"
            title="Kenwood kMix Stand Mixer for Baking ,Stylish Kitchen Mixer with K-beater ,Dough Hook and Whisk,5 litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1121"
            title="FitBit LC513216461EN' SMART WATCH "
            price={199.2}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            id="1122"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, CHarcoal Fabric "
            price={98.9}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$.jpg"
            rating={3}
          />
          <Product
            id="1123"
            title="New Apple IPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={730.23}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="1131"
            title="Samsung LC513216461EN 49' Curved LED Gaming Moniter - Super Ultra Wide Dual Monitor "
            price={730.23}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
