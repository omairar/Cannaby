import React from 'react'
import "./dashboard.css";

export default function dashboard() {
    return (
        <div>
            


    <div class="Profile-container" id="Profile-container">
        <div>
            <p class="User-name">Welcom back, Anastacia</p>
            <div class="profile-line" id="line-p87"></div>
        </div>
        <div>
            <div>
                <p class="my-profile"><i class="far fa-user"></i><a href="#">My Profile</a> </p>
            </div>
            <div>
                <p class="my-Orders"><i class="fas fa-box"></i><a href="#">Orders</a> </p>
            </div>
            <div>
                <p class="my-Wishlist"><i class="far fa-heart"></i><a href="#">Wishlist</a> </p>
            </div>
            <div>
                <p class="profile-Contact-Us"><i class="fas fa-headset"></i><a href="#">Contact Us</a> </p>
            </div>
            <div class="profile-line" id="line-p88"></div>
        </div>
        <div>
            <div>
                <p class="profile-Membership"><i class="far fa-star"></i><a href="#">Membership</a> </p>
            </div>
            <div>
                <p class="profile-Saved-Adresses"><i class="fas fa-map-marker"></i><a href="#">Saved Adresses</a> </p>
            </div>
            <div>
                <p class="profile-Saved-card"><i class="far fa-credit-card"></i><a href="#">Saved Card</a> </p>
            </div>
        </div>
        <div>
            <button class="profile-btn">
                <p class="profile-logout">logout</p>
            </button>
        </div>
    </div>

        </div>
    )
}
