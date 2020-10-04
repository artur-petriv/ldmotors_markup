import Swiper from "swiper/bundle"
const $ = require(`jquery`)
window.jQuery = $
require(`jquery-mask-plugin`)


document.addEventListener(`DOMContentLoaded`, function () {

    $(`#tel`).mask(`+38 (000) 000-00-00`)

    const swiper = new Swiper(`.swiper-container`, {
        grabCursor: false,
        simulateTouch: false,
        pagination: {
            el: `.swiper-pagination`,
            clickable: true,
        },
        navigation: {
            nextEl: `.swiper-button-next`,
            prevEl: `.swiper-button-prev`,
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
