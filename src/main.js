import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
library.add(faTimesCircle);
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
