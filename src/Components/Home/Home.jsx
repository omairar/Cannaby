import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      
        <div className="baap">
          <div className="main">
            <div className="text">
              <div className="left">
                <article>
                  <h3 className="h1">
                    Suver Haze CDB <br />
                    30% Off
                  </h3>
                  <p>
                    Suver Haze is a hight CDB that is guarunteed to satisfy.
                    Except fruity, almost <br /> sour apple flavors mixed with
                    an earthy hue, and an overall sense of clarity.
                  </p>
                </article>
              </div>
              <div className="right">
                <article>
                  <img className="imgweed" src="./image/one.png" alt="" />
                </article>
              </div>
            </div>
          </div>
        </div>
      

      <div className="title">
        <h3 className="a">Categories</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3">
        <Categories />
        <Categories />
        <Categories />
        <Categories />
        <Categories />
      </div>

      <div className="title title1">
        <h3 className="a">Flash sale</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <FlashSale />
        <FlashSale />
        <FlashSale />
        <FlashSale />
        <FlashSale />
      </div>

      <div className="title title1">
        <h3 className="a">Popular today</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <Popular />
        <Popular />
        <Popular />
        <Popular />
        <Popular />
      </div>
      <div className="title title1">
        <h3 className="a">Trending Now</h3>
        <h3 className="b">View All</h3>
      </div>
      <div className="cat3 cat4">
        <Trending />
        <Trending />
        <Trending />
        <Trending />
        <Trending />
      </div>
    </div>
  );
}
