import { mount as svelteMount } from 'svelte';
import App from './App.svelte';
import './index.css';

export default function mount(el: HTMLElement) {
    svelteMount(App, { target: el });
}
