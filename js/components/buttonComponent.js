export default {
    name: "ButtonComponent",

    template: `

        <div class="video-btns">
            <img @click="loadVideoComponent" data-video="demo" src="images/btn-deem-reel.png" alt="demo reel button">
            <img @click="loadVideoComponent" data-video="promo" src="images/btn-promo.png" alt="promo video button">
            <img @click="loadVideoComponent" data-video="kid" src="images/btn-kids.png" alt="kids channel button">
        </div>
    `,

    methods: {
        loadVideoComponent(event) {
            // debugger;
            this.$emit("setvideo", event.target.dataset.video);
        }
    }
}