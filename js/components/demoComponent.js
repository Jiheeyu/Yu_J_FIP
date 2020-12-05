export default {
    name: "demoComponent",
    
    props: ["item"],

    template: `
        <div>
            <div class="video-img demo-bg">
                <img class="thumb"  :src="'images/' + item.thumb" alt="demo reel thumbnail">
            </div>
            <div class="lightbox">
                <video class="video-lb" :src="'videos/' + item.source" type="video/mp4" controls="true"></video>
                <img @click="closelb" class="close" src="images/icon-close.svg" alt="close icon" width="25px" height="25px">
            </div>

        </div>
    `,

    computed: {
        currentItem: function() {
            return this.videolist;
        }
    },

    methods: {
        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        }
    }

}

