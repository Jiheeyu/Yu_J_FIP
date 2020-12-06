export default {
    name: "demoComponent",
    
    props: ["item"],

    template: `
        <div>
            <div class="video-img demo-bg">
                <img class="thumb"  :src="'images/' + item.thumb" alt="demo reel thumbnail">
                <video class="thumb" :src="'videos/' + item.source" type="video/mp4" controls="true"></video>
            </div>
        </div>
    `,

    computed: {
        currentItem: function() {
            return this.videolist;
        }
    },

    methods: {
        // closelb() {
        //     document.querySelector('.lightbox').classList.remove('show-lightbox');
        // }
    }

}

