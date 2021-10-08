import React from 'react';
import "./Productpage.css";

export default function Productpage() {
    return (
        <div>
            <div class="productpage">
      <div class="pages1">
        <img src="one.png" alt="" />
      </div>
      <div class="pages2">
        <h5 class="suver">Suver Haze CBD 3.50g</h5>
        <div class="gridbutton">
          <div class="caret-down"><i class="fas fa-caret-down">4% TBH</i></div>
          <div class="caret-up"><i class="fas fa-caret-up"></i>90% CBD</div>

        </div>
       
        
        
        <p class="brand">
          <div class="brandtext">Brand:</div>
          <div class="brandvalue">Black Diamond</div>
        </p>
        <form>
          <div class="value-button" id="decrease" onclick="decreaseValue()" value="Decrease Value">-</div>
          <input type="number" id="number" value="0" />
          <div class="value-button" id="increase" onclick="increaseValue()" value="Increase Value">+</div>
        </form>
        <button class="btnproduct1"> <i class="fas fa-shopping-bag"></i> ADD TO Cart</button>
        <button class="btnproduct2"> <i class="far fa-heart"></i> ADD TO Wishlist</button>
        <hr class="line57" />
        <h6>Description</h6>
        <p class="discription">
          Suver Haze is a high CBD delight that is guaranteed to satisfy. Expect
          fruity, almost sour apple flavors mixed with an earthy hue, and an
          overall sense of clarity, wellbeing, and mind and body connection. A
          perfect strain for anyone, anytime. Suver Haze is...
        </p>
        <hr class="line58"/>
        <h6 className="Effectheading">Effects</h6>
        <p className="Effectspara">2500 reported effects from 525 people</p>
        <div class="gridTable">
            <div class="tab1" id="feeling"><a href="">Feelings</a></div>
            <div class="tab2" id="Helpswith"><a href=""> Helps with</a></div>
            <div class="tab3" id="negative"><a href=""> Negative</a></div>
        </div>
        <div class="gridcontainer">
            <div id="grid1" class="grid">Energetic  49%</div>
            <div class="gridline">
                <div id="gridlinerating1"></div>
                <div id="gridlinerating2"></div>
                <div id="gridlinerating3"></div>
                <div id="gridlinerating4"></div>
                <div id="gridlinerating5"></div>
            </div>
            <div id="grid2" class="grid">Happy  55%</div>
            <div class="gridline">
                <div id="gridlinerating6"></div>
                <div id="gridlinerating7"></div>
                <div id="gridlinerating8"></div>
                <div id="gridlinerating9"></div>
                <div id="gridlinerating10"></div>
            </div>
            <div id="grid3" class="grid">Relaxed  65%</div>
            <div class="gridline">
                <div id="gridlinerating11"></div>
                <div id="gridlinerating12"></div>
                <div id="gridlinerating13"></div>
                <div id="gridlinerating14"></div>
                <div id="gridlinerating15"></div>
            </div>
            <div id="grid4" class="grid">Focused  40%</div>
            <div class="gridline">
                <div id="gridlinerating16"></div>
                <div id="gridlinerating17"></div>
                <div id="gridlinerating18"></div>
                <div id="gridlinerating19"></div>
                <div id="gridlinerating20"></div>
            </div>
            <div id="grid5" class="grid">Uplifted  20%</div>
            <div class="gridline">
                <div id="gridlinerating21"></div>
                <div id="gridlinerating22"></div>
                <div id="gridlinerating23"></div>
                <div id="gridlinerating24"></div>
                <div id="gridlinerating25"></div>
            </div>
        </div>
      </div>
    </div>
        </div>
    )
}
