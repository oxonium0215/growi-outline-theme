import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ['/src/styles/style.scss'],
      output: {
        // Stable filename — avoids GROWI DB mismatch on every build
        assetFileNames: 'assets/style.[ext]',
      },
    },
  },
});
