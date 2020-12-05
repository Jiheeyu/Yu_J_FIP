export default {
    name: "promoComponent",

    props: ["item"],
    
    template: `
        <div>
            <div class="video-img promo-bg">
            <img class="thumb" :src="'images/' + item.thumb" alt="promo video thumbnail">
            </div>
        </div>
    `
}