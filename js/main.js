import demoComponent from "./components/demoComponent.js";
import promoComponent from "./components/promoComponent.js";
import kidComponent from "./components/kidsChannelComponent.js";
import ButtonComponent from "./components/buttonComponent.js";
import graphicCard from "./components/graphicPortfolio.js";
import { fetchData } from "./components/DataMiner.js";

(() => {
    const myVM = new Vue({
        
        data: {
            activeComponent: demoComponent,

            showNavBar: false,

            currentItem: {},
            videoList: "",
            collection: []
            
            
        },

        mounted: function() {
            console.log("Vue is mounted, trying to fetch call");

            fetchData("./includes/index.php").then(data => {
                console.log('data', data);
                this.collection = data;

            }).catch(err => console.log(err));
        },

        updated: function() {
            console.log('Vue just updated the DOM');
        },

        methods: {

            showNav() {
                this.showNavBar = !this.showNavBar;
            },

            setVideoComponent(component) {
                //debugger;        
                this.activeComponent = `${component.video_list}Component`;
                this.videoList = component.video_list;
                this.currentItem = component;
            }
        },

        components: {
            demoComponent,
            promoComponent,
            kidComponent,
            "buttoncomponent": ButtonComponent,
            "graphic-card": graphicCard
        }
    }).$mount("#app");
})();
