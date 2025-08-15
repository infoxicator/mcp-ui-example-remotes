import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [
    pluginSvelte(),
    pluginModuleFederation(moduleFederationConfig),
  ],
  server: {
    port: 3003,
  },
});
