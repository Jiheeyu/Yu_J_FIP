export default {
 
    props: ['item', 'video'],

    template: `

        <section class="video-lightbox">
            <video class="demo-reel" src="videos/demo-reel.webm" type="video/mp4" controls="true"></video>
            <img @click="closelb" class="close" src="images/icon-close.svg" alt="close icon" width="25px" height="25px">
        </section>
    `,

    methods: {
        loadVideoComponent(event) {
            // debugger;
            this.$emit("setvideo", this.item);
            // this.$emit("setvideo", event.target.dataset.video);
        }
    }
}