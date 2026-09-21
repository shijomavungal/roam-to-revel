import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const githubPagesBase = process.env.GITHUB_PAGES === 'true' ? '/roam-to-revel/' : '/';

export default defineConfig({
  plugins: [react()],
  base: githubPagesBase,
  server: {
    port: 5173,
    host: true,
  },
});
