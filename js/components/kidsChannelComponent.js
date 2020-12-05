export default {
    name: "kidComponent",

    props: ["item"],
    
    template: `
        <div>
            <div class="video-img kid-bg">
            <img class="thumb" :src="'images/' + item.thumb" alt="kids channel thumbnail">
            </div>
        </div>
    `
}