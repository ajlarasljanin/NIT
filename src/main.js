import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';

const app = createApp(App)


import 'primevue/resources/themes/md-light-indigo/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'   


app.use(PrimeVue);
app.component('Dialog', Dialog);


// window.jQuery = window.$ = require('jquery')

app.use(AOS)

AOS.init({
    duration: 800,    
});


app.use(router)
app.mount('#app')
