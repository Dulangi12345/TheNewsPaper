import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'


const manifestForPlugin = {
  name: "The-Catalyst",
  short_name: "The-Catalyst",
  start_url: "/The-Catalyst/",
  scope: "./",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  orientation : "portrait",
  description : "The-Catalyst",

  icons :[
    {
      "src": "favicon-16x16.png", 
      "sizes": "16x16",
      "type": "image/png",
    },
    {
      "src": "favicon-32x32.png", 
      "sizes": "32x32",
      "type": "image/png",
    },

    {
      "src": "android-icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "prupose": "any",
    },

    {
      "src": "android-icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },

    {
      "src": "android-chrome-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]

}



// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server :{
    // proxy:{
    //   '/api': {
    //     target: 'https://secure.myfees.lk',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '/api/sch/payments'),
       

        
    //     configure: (proxy, options) => {
    //       proxy.on('error', (err, req, res) => {
    //         console.error(err);
    //       });
    //       proxy.on('proxyReq', (proxyReq, req, res) => {
    //         console.log('Sending Request to the Target:', req.method, req.url);
    //       });
    //       proxy.on('proxyRes', (proxyRes, req, res) => {
    //         console.log('Received Response from the Target:', proxyRes.statusCode, req.url);

    //       });
    //     },
    //   },
    
    // }
  },
  plugins: [
    react(),
    VitePWA ({
      manifest : manifestForPlugin,

    }),
    
  ],

})
