import React from 'react'
import "./EmptiedWishlist.css"

export default function EmptiedWishlist() {
    return (
        <div>
                <div class="emptylistgrid">
        <div class="emptyleft">
            <p>My Wishlist</p>
        </div>
        <div class="emptyright">
            <p>Empty</p>
        </div>
    </div>
    <div class="wlimage">
        <div class="imageleft">
            <img src="./image/Women Power Mobile.png" alt=""/>
        </div>
        <div class="wlcontent">
            <p>Oops! Nothing to show here..</p>
            <button class="wlbtn">CONTINUE SHOPPING</button>
        </div>
    </div>
        </div>
    )
}
