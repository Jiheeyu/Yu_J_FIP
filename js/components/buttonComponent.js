

export default {
    name: "ButtonComponent",

    props: ["item"],

    template: `
        <div class="video-btns">
            <img @click="loadVideoComponent" :data-videolist="item.video_list" :src="'images/' + item.btn_thumb" alt="videos button">
        </div>
    `,

    methods: {
        loadVideoComponent(event) {
           //debugger;
            this.$emit("setvideo",  this.item);
        }
    }
}