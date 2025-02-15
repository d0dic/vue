
import { defineAsyncComponent } from 'vue'

const Button = defineAsyncComponent(() =>
    import('./components/Button/Button.vue')
)

const Header = defineAsyncComponent(() =>
    import('./components/Header/Header.vue')
)

export {
    Button,
    Header
}