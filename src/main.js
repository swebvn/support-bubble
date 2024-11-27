import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// create the element "#tda-support-bubble"
const supportBubble = document.createElement('div')
supportBubble.id = 'tda-support-bubble'
document.body.appendChild(supportBubble)


createApp(App).mount(supportBubble)
