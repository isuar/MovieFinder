// Workaround for Netlify build issues with Pinia
export default function () {
  return {
    name: 'rollup-options-patch',
    configResolved(config) {
      // Ensure pinia is treated correctly during build
      if (config.build && config.build.rollupOptions) {
        // Make sure pinia is not externalized
        if (Array.isArray(config.build.rollupOptions.external)) {
          config.build.rollupOptions.external = config.build.rollupOptions.external.filter(
            ext => ext !== 'pinia' && !ext.includes('pinia')
          );
        }
      }
    }
  };
}
