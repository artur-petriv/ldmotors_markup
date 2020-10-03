const $ = require(`jquery`)
window.jQuery = $
require(`jquery-mask-plugin`)

document.addEventListener(`DOMContentLoaded`, function () {
    $(`#tel`).mask(`+38 (000) 000-00-00`)
})
