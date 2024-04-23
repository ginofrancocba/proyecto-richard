import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-refresh';


// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
  server: {
    fs: {
      // Agregar la carpeta node_modules a la lista de permisos
      allow: ['..', 'node_modules'],
    },
  }, 
});
