
// TODO: Setup lazy load???
import { defineAsyncComponent } from 'vue'

const HelloWorld = defineAsyncComponent(() =>
    import('./components/HelloWorld.vue')
)

// import HelloWorld from './components/HelloWorld.vue'

export { HelloWorld }