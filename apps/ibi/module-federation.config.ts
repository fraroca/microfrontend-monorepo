import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'ibi',
  exposes: {
    './Routes': 'apps/ibi/src/app/remote-entry/entry.routes.ts',
    './ComponenteIbiShared': 'apps/ibi/src/app/ibi.component.ts',
  },
};
/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
