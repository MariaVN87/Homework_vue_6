import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //slides: [],
        descriptions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus.Aliquam sollicitudin tellumassa, vbel maximus purus posuere in.Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis.Phasellus ut dolor odio.Aenean in the ipsum vel lectus bibendum commodo. <br> <br> In nec sem suscipit, convallis leo vitae, lacinia nibh.Cras amet tellus lectus.Vivamus ipsum nunc, mattis quisnibh id, pellentesque arcu.Donec a pellentesque Cras erat enim, gravida non ante vitae, elequis convallis elit, inviverra felis.Donec ultrices tellus vitae iaculisvd porta.Proin tincidunt ligula id purusporttitor.',
    },
    getters: {
        /* slides(state) {
            return state.slides
        }, */

    },
    mutations: {
        /* SET_SLIDES(state, slides) {
            state.slides = slides
        } */
    },
    actions: {
        /* fetchSlides({ commit }) {
            commit('SET_SLIDES', [
                {
                    alt: 'image 1',
                    url: 'PhotoSlider1.png'
                },
            ])
        }, */

    }
})

