import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Configuration Vite — voir https://vitejs.dev/config/
export default defineConfig({
// DémoVitrine est hébergé dans le sous-dossier du portfolio
base: '/Portfolio/project/demovitrine/',

plugins: [react()],

resolve: {
alias: {
'@': fileURLToPath(new URL('./src', import.meta.url)),
},
},

optimizeDeps: {
include: ['lucide-react', 'react', 'react-dom'],
},
});
