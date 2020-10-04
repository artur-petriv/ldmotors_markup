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
})
