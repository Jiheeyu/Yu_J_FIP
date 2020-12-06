export default {
    name: "kidComponent",

    props: ["item"],
    
    template: `
        <div>
            <div class="video-img kid-bg">
                <video class="thumb" :src="'videos/' + item.source" type="video/mp4" controls="true"></video>
            </div>
        </div>
    `
}