export default {
    name: "promoComponent",

    props: ["item"],

    template: `
        <div>
            <div class="video-img promo-bg">
                <video class="thumb" :src="'videos/' + item.source" type="video/mp4" controls="true"></video>
            </div>
        </div>
    `
}