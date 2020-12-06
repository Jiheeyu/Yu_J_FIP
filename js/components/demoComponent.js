
export default {
    name: "demoComponent",
    
    props: ["item"],

    template: `
        <div>
            <div class="video-img demo-bg">
                <iframe class="thumb" width="560" height="315" src="https://www.youtube.com/embed/lDs_lcKNV5I" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    `,

}