
export default {
    name: "promoComponent",

    template: `
        <div>
            <div class="video-img promo-bg">
            <img class="thumb" src="images/port-promo-thumb.jpg" alt="promo video thumbnail">
            </div>
            <div class="video-content">
                <video class="demo-reel" src="videos/demo-reel.webm" type="video/mp4" controls="true"></video>
                <img class="close" src="images/icon-close.svg" alt="close icon" width="25px" height="25px">
            </div>
        </div>
    `
}