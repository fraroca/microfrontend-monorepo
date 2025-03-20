import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'ivtm',
  exposes: {
    './Routes': 'apps/ivtm/src/app/remote-entry/entry.routes.ts',
    './ComponenteIvtmShared': 'apps/ivtm/src/app/ivtm_component/ivtm_component.component.ts',
    './ComponenteIvtmPruebaShared': 'apps/ivtm/src/app/ivtm_prueba/ivtm_prueba_component.ts',
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
