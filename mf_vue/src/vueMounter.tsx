import { createApp } from 'vue';
import App from './components/ProviderComponent.vue';


export default function mount(el: HTMLElement) {
    createApp(App).mount(el);
}

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_vue-mf-root');
    if (devRoot) {
        mount(devRoot as HTMLElement);
    }
}