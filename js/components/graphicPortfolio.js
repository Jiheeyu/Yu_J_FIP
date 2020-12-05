export default {
    name: "graphicCard",
    props: ["graphic"],

    // data needs to be a function inside a component

    template: 
        `<li class="proj-item">
            <div class="proj-text">
                <h3></h3>
                <h3 class="proj-name">{{graphic.title}}</h3>
                <p class="proj-descrip"></p>
            </div>
            <div class="proj-img">
                <img :src="'images/' + graphic.thumb" alt="">
            </div>
        </li>
        `,

    created: function() {
        console.log(`created ${this.graphic.name}'s card`);
    },

    methods: {
        // logClicked() {
        //     // console.log(`fired from inside ${this.car.ENGINE_ARCHITECTURE}'s the component!`);
        //     // this.toggle.on = !this.toggle.on;
        // }
    }
}