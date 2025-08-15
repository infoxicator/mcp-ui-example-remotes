import { render } from 'solid-js/web';
import App from './App';

export default function renderApp(root: HTMLElement) {

if (root) {
  render(() => <App />, root);
  }
}
