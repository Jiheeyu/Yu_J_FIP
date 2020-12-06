export default {
    name: "graphicWork",

    props: ["work"],
    // data needs to be a function inside a component

    template: `
            <section class="graphic-template">
                <h2>{{work.title}}</h2>
                <img :src="'images/' + work.source ">
                <div class="graphic-descip">
                    <h2>{{work.description}}<h2>
                </div>
            </section>
        `,
}