import Swiper from "swiper/bundle"
const $ = require(`jquery`)
window.jQuery = $
require(`jquery-mask-plugin`)


document.addEventListener(`DOMContentLoaded`, function () {

    $(`#tel`).mask(`+38 (000) 000-00-00`)

    const menuBtn = document.querySelector(`.hamburger`)
    const navMenu = document.querySelector(`.nav-mob`)
    const body = document.querySelector(`.body`)

    function toggleMenu(e) {
        e.preventDefault()
        menuBtn.classList.toggle(`is-active`)
        navMenu.classList.toggle(`is-visible`)
        body.classList.toggle(`overflow-hidden`)
    }

    menuBtn.addEventListener(`click`, toggleMenu)

    const swiper = new Swiper(`.swiper-container`, {
        slidesPerView: 1,
        grabCursor: false,
        autoHeight: true,
        simulateTouch: false,
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
        },
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
        },
        breakpoints: {
        // when window width is >= 320px
            320: {
                autoHeight: true,
                slidesPerView: 1,
            },
            568: {
                autoHeight: false,
                slidesPerView: 1,
            },
        },
    })


    function initMap() {
        const map = new google.maps.Map(document.getElementById(`map`), {
            center: {
                lat: 50.4608176,
                lng: 30.4949624,
            },
            zoom: 14,
            disableDefaultUI: !0,
        })

        const marker = new google.maps.Marker({
            position: { lat: 50.4609176, lng: 30.4956624 },
            map,
        })
        marker.addListener(`click`, function () {
        })
    }

    initMap()
})
