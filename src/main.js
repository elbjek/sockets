import Vue from 'vue'
import App from './App.vue'

import socketio from 'socket.io';
import VueSocketIO from 'vue-socket.io';

export const SocketInstance = socketio('http://localhost:4113');

Vue.use(VueSocketIO, SocketInstance)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
