import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'mf_vue',
  exposes: {
    '.': './src/vueMounter.tsx',
  },
  shared: {
    vue: { singleton: true },
  },
  getPublicPath: `function() {return "https://mcp-ui-example-remotes.vercel.app/mf_vue/"}`,
});
