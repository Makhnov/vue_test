import { createApp } from 'vue';
import App from './App.vue';
import UnAmi from './components/UnAmi.vue';
import NewAmi from './components/NewAmi.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
// createApp(App).mount('#app')
//On peut aussi stocker l'appli dans une variable
const app = createApp(App);
app.component('un-ami', UnAmi);
app.component('new-ami', NewAmi);
app.mount('#app');
