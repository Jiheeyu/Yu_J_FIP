import Demo from "./demoComponent.js";

export default {

    props: ["item", "videolist"],
   
    template: `

        <div class="lightbox">
            <video class="video-lb" :src="'videos/' + item.source" type="video/mp4" controls="true"></video>
            <img @click="closelb" class="close" src="images/icon-close.svg" alt="close icon" width="25px" height="25px">
        </div>
    `,

    computed: {
        currentItem: function() {
            return this.videolist;
        }
    },

    components: {
      Demo
    },

    methods: {
        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }


}