export default {
    name: "ButtonComponent",

    props: ['item'],

    template: `

        <div class="video-btns">
            <img @click="loadVideoComponent" data-video="demo" :src="'images/' + item.btn_thumb " alt="kids channel button">
        </div>
    `,

    methods: {
        loadVideoComponent(event) {
            // debugger;
            this.$emit("setvideo", event.item.dataset.video);
            // this.$emit("setvideo", event.target.dataset.video);
        }
    }
}