import { pluginAngular } from '@ng-rsbuild/plugin-angular';
import { defineConfig } from '@rsbuild/core';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';
import { createConfig } from '@ng-rsbuild/plugin-angular';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { shareAll } from '../mf.tools';


// export default defineConfig({
//   plugins: [pluginAngular(), pluginModuleFederation(moduleFederationConfig)],
//   output: {
//     assetPrefix: 'https://mcp-ui-example-remotes.vercel.app/angular_mfe1/',
//   },
//   server: {
//     port: 4201
//   }
// });


export default createConfig({
  browser: './src/main.ts',
}, {
  server: {
    port: 4201
  },
  moduleFederation: {
    options: {
      name: 'mfe1',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/bootstrap.ts'
      },
      shared: {
        ...shareAll({
          singleton: true,
          strictVersion: true,
        })
      },
    }
  },
  output: {
    assetPrefix: 'https://mcp-ui-example-remotes.vercel.app/angular_mfe1/browser/',
  }
});
