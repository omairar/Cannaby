import React from 'react'
import "./login.css";

export default function login() {
    return (
       

<div class="bdy">

    <div class="logincontainer">
        <div>
            <p class="loginhead"> welcome</p>
            <p class="loginmsg">Access your account and manage orders</p>
        </div>
        <div>

            <button class="loginbtnbrdr">LOGIN/SIGN UP</button>

        </div>
        <div class="loginline"></div>

        <div class="loginlist1">
            <i class="fas fa-box"></i>
            <p>Orders</p>
        </div>
        <div class="loginlist2">
            <i class="far fa-heart"></i>
            <p>Wishlist</p>
        </div>
        <div class="loginlist3">
            <i class="fas fa-headset"></i>
            <p>Contact us</p>
        </div>
        <div class="loginline1"></div>

        <div class="loginlist4">
            <p>Membership</p>
            <i class="far fa-star"></i>
        </div>

        <div class="loginlist5">
            <p>Saved Address</p>
            <i class="fas fa-map-marker-alt"></i>
        </div>

        <div class="loginlist6">
            <i class="far fa-credit-card"></i>
            <p>Save card</p>
        </div>

    </div>

</div>


    )
}
