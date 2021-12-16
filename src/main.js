import { createApp } from 'vue'
import App from './App.vue'
import StoryblokVue from "@storyblok/vue";
import router from './router'
import store from './store'
import Teaser from './components/Teaser.vue'
import Page from './components/Page.vue'
import ProductGrid from './components/ProductGrid.vue'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App).use(store).use(router).use(StoryblokVue)

app.component('Teaser', Teaser)
app.component('ProductGrid', ProductGrid)
app.component('Page', Page)

app.mount('#app')

// createApp(App).use(store).use(router).use(StoryblokVue).mount('#app')
