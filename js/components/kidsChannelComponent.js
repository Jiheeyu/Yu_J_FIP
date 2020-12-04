
export default {
    name: "kidComponent",

    template: `
        <div>
            <div class="video-img kid-bg">
            <img class="thumb" src="images/port-kid-thumb.jpg" alt="kids channel thumbnail">
            </div>
            <div class="video-content">
                <video class="demo-reel" src="videos/demo-reel.webm" type="video/mp4" controls="true"></video>
                <img class="close" src="images/icon-close.svg" alt="close icon" width="25px" height="25px">
            </div>
        </div>
    `
}