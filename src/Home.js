import React from "react";
import "./home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  return (
    <div className="home">
      <Carousel
        // showThumbs={false}
        // infiniteLoop
        // showArrows={false}
        // interval={3000}
        // autoPlay
        // transitionTime={1500}
        // stopOnHover={false}
        // swipeable
        // emulateTouch
        // showIndicators={false}
        // showStatus={false}
      >
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          // src="https://m.media-amazon.com/images/I/71EKX-siwDL._SX3000_.jpg"
          // alt=""
        />
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61CX1noQ8nL._SX3000_.jpg"
          alt="slider"
        />

        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
          alt="slider"
        />
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71GpP-O3pTL.jpg"
          alt="slider"
        />
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3000_.jpg"
          alt="slider"
        />
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img20/events/Q4/Holiday/GiftGuides/HGG/finald1graphics/HGG_CozyUp-bg_GW-1x_1500x600._CB405315515_.jpg"
          alt="slider"
        />
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-NmFmMWY4Y2Mt-w1500._CB644930552_.jpg"
          alt="slider"
        />
      </Carousel>
      <div className="home__container">
        <div className="home__row">
          <Product
            id="12321341"
            title="Apple iMac MK462LL/A 27-Inch Retina 5K Desktop (3.2 GHz Intel Core i5, 8GB DDR3, 1TB, Mac OS X), Silver ()(Renewed)"
            price={800.59}
            rating={5}
            image="https://m.media-amazon.com/images/I/710Lq-tQgPL._AC_UY436_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="KAISHUO - Print 5 Panels Framed Canvas Wall Art Traditional Ethiopian Wicker Baskets Painting Picture Poster Modern Abstract Home Living Room Decorations Ready to Hang - Inner Frame"
            price={84.0}
            rating={4}
            image="https://m.media-amazon.com/images/I/71TM+Ml3v+L._AC_UL640_FMwebp_QL65_.jpg"
          />
          //{" "}
        </div>
        <div className="home__row">
          <Product
            id="7903850"
            title="Gaming Chair with Headrest and Lumbar Support Big and Tall Heavy Duty High Back Office Chair Ergonomic Swivel Recliner Desk Chair with Adjustable Armrest, Blue"
            price={141.99}
            rating={6}
            image="https://m.media-amazon.com/images/I/71CPddh5T5L._AC_UL640_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="Trade Winds 3X5 Ethiopia Flag Ethiopian Rastafarian Rasta New F131 Fade Resistant Premium"
            price={7.77}
            rating={5}
            image="https://m.media-amazon.com/images/I/51AnE-2RruL._AC_UL640_FMwebp_QL65_.jpg"
          />

          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Goujxcy LED TV Stand for 60 inch TVs, High Gloss Entertainment Center with Storage Drawer, Media Console Table Television Stands Cabinet Desk"
            price={99.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/81QGk59-NuL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="4103840"
            title="Apple Watch Series 6 (GPS, 40mm) - (Product) RED - Aluminum Case with (Product) RED﻿ - Sport Band"
            price={384.98}
            rating={6}
            image="https://m.media-amazon.com/images/I/81ww7fpkNHL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="325635434"
            title="𝙠𝙞𝙙 Desk and Chair Set with Drawer, Height Adjustable Student Study Desk, 𝙠𝙞𝙙 Desk Chair with Tilted Table"
            price={69.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MOPYE5FPL._AC_UL640_QL65_.jpg"
          />
          ;
        </div>
        <div className="home__row">
          <Product
            id="2045930"
            title="SAMSUNG 55-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in (UN55TU8300FXZA, 2020 Model)"
            price={548.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/9138UedBC+L._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

