export default {
    name: "graphicCard",
    props: ["graphic"],

    // data needs to be a function inside a component

    template: 
        `<li @click="showlightBox" :data-graphiclist="graphic.graphic_list" class="proj-item">
            <div class="proj-text">
                <h3 class="proj-name">{{graphic.title}}</h3>
                <p class="proj-descrip"></p>
            </div>
            <div class="proj-img">
                <img :src="'images/' + graphic.thumb" alt="">
            </div>
        </li>
        `,

    methods: {
        showlightBox(event) {
            this.$emit("setgraphic", this.graphic);
        }
    }

}