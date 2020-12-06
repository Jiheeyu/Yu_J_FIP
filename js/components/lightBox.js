import graphicWork from "./graphicComponent.js"
import videoWork from "./videoComponent.js"

export default {

    props: ["item", "graphiclist"],

    // data needs to be a function inside a component

    template: 
        `<section class="lightbox">
            <span class="close" @click="closelb"><img src="images/icon-close.svg"></span>

            <component :is="currentComponent" :work="item"></component>
        </section>
        `,

    computed: {
        currentComponent: function() {
            return this.graphiclist;
        }
    },

    components: {
        graphicWork,
        videoWork
    },

    methods: {
        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }

}