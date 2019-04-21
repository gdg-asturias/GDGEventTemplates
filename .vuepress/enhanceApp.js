import VueGoogleMaps from 'vue-googlemaps'
import VueLazyload from 'vue-lazyload'
import VueCountdown from '@chenfengyuan/vue-countdown';
import VueScrollTo from 'vue-scrollto';

export default ({
    Vue
  }) => {
    Vue.component(VueCountdown.name, VueCountdown)
    Vue.use(VueScrollTo)
    Vue.use(VueLazyload)
    Vue.use(VueGoogleMaps, {
        load: {
            apiKey: 'AIzaSyBwVGsVCnxkcSXQyfjQcjl-14XgQ_zwxLU',
            libraries: ['places']
        }
    })
}