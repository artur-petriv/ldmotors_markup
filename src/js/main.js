import Swiper from "swiper/bundle"
const $ = require(`jquery`)
window.jQuery = $
require(`jquery-mask-plugin`)


document.addEventListener(`DOMContentLoaded`, function () {
    // Phone mask by ID selector
    $(`.phone-mask`).mask(`+38 (000) 000-00-00`)

    // SwiperJS settings
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

    // Nav menu actions
    const menuBtn = document.querySelector(`.hamburger`)
    const navMenu = document.querySelector(`.nav-mob`)
    const body = document.querySelector(`.body`)

    function toggleMenu() {
        menuBtn.classList.toggle(`is-active`)
        navMenu.classList.toggle(`is-visible`)
        body.classList.toggle(`overflow-hidden`)
    }

    menuBtn.addEventListener(`click`, toggleMenu)


    // Modal actions
    const modal = document.getElementById(`modal`)
    const btns = document.querySelectorAll(`.btn`)
    const modalClose = document.querySelector(`.modal__close`)
    const modalOverlay = document.querySelector(`.modal__overlay`)

    function togglePopup() {
        modal.classList.toggle`modal_is-visible`
        body.classList.toggle(`overflow-hidden`)
    }

    btns.forEach((btn) => btn.addEventListener(`click`, togglePopup))
    modalClose.addEventListener(`click`, togglePopup)
    modalOverlay.addEventListener(`click`, (e) => {
        e.stopPropagation()
        e.target.closest(`.modal__wrap`) || togglePopup()
    })

    // Google maps function
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
        marker.addListener(`click`, function () {})
    }

    // Init gooogle map
    initMap()
})
