import React from 'react'
import "./Wishlist.css"

export default function Wishlist() {
    return (
        <>
        <div className="Wish">
      <h2 className="mywishlist">My Wishlist 1 Item</h2>
    </div>
    <div className="Rectangle">
    <div className="rectangle2941" id="rect1">
        <i className="far fa-times-circle"></i>
        <img src="../image/preroll-stock-2-v1-2.png" alt=""/>
        <h3>Dama Glue Preroll 2pk - Dama 1 Gm</h3>
        <h4>$ 15.00</h4>
        <button type="button">
            <i className="fas fa-cart-plus"></i>
            MOVE TO CART
        </button> 
    </div>
    <div className="rectangle2942" id="rect2">
        <i className="far fa-times-circle"></i>
        <img src="./Wishlist/image/33.png" alt=""/>
        <h3>Passion Punch 1 Gm</h3>
        <h4>$ 25.00</h4>
        <button type="button">
            <i className="fas fa-cart-plus"></i>
            MOVE TO CART
        </button> 
    </div>
    <div className="rectangle294" id="rect3">
        <i className="far fa-times-circle"></i>
        <img src="../image/preroll-stock-2-v1-3.png" alt=""/>
        <h3>Purple Sherbet 1/8 oz</h3>
        <h4>$ 22.00</h4>
        <button type="button">
            <i className="fas fa-cart-plus"></i>
            MOVE TO CART
        </button> 
    </div>
    <div className="rectangle294" id="rect4">
        <i className="far fa-times-circle"></i>
        <img src="../image/32.png" alt=""/>
        <h3>Super Lemon Haze 2 oz</h3>
        <h4>$ 15.00</h4>
        <button type="button">
            <i className="fas fa-cart-plus"></i>
            MOVE TO CART
        </button> 
    </div>
    </div>
        </>
        
    )
}