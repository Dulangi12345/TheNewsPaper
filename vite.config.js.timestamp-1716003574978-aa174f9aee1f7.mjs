// vite.config.js
import { defineConfig } from "file:///D:/TheNewsPaper/node_modules/vite/dist/node/index.js";
import react from "file:///D:/TheNewsPaper/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { VitePWA } from "file:///D:/TheNewsPaper/node_modules/vite-plugin-pwa/dist/index.js";
var manifestForPlugin = {
  name: "The-Catalyst",
  short_name: "The-Catalyst",
  start_url: "/The-Catalyst/",
  scope: "./",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  orientation: "portrait",
  description: "The-Catalyst",
  icons: [
    {
      "src": "favicon-16x16.png",
      "sizes": "16x16",
      "type": "image/png"
    },
    {
      "src": "favicon-32x32.png",
      "sizes": "32x32",
      "type": "image/png"
    },
    {
      "src": "android-icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "prupose": "any"
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
};
var vite_config_default = defineConfig({
  base: "./",
  // server :{
  //   proxy:{
  //     '/api': {
  //       target: 'https://secure.myfees.lk',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '/api/sch/payments'),
  //       configure: (proxy, options) => {
  //         proxy.on('error', (err, req, res) => {
  //           console.error(err);
  //         });
  //         proxy.on('proxyReq', (proxyReq, req, res) => {
  //           console.log('Sending Request to the Target:', req.method, req.url);
  //         });
  //         proxy.on('proxyRes', (proxyRes, req, res) => {
  //           console.log('Received Response from the Target:', proxyRes.statusCode, req.url);
  //         });
  //       },
  //     },
  //   }
  // },
  plugins: [
    react(),
    VitePWA({
      manifest: manifestForPlugin
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxUaGVOZXdzUGFwZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFRoZU5ld3NQYXBlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVGhlTmV3c1BhcGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJ1xyXG5cclxuXHJcbmNvbnN0IG1hbmlmZXN0Rm9yUGx1Z2luID0ge1xyXG4gIG5hbWU6IFwiVGhlLUNhdGFseXN0XCIsXHJcbiAgc2hvcnRfbmFtZTogXCJUaGUtQ2F0YWx5c3RcIixcclxuICBzdGFydF91cmw6IFwiL1RoZS1DYXRhbHlzdC9cIixcclxuICBzY29wZTogXCIuL1wiLFxyXG4gIGRpc3BsYXk6IFwic3RhbmRhbG9uZVwiLFxyXG4gIGJhY2tncm91bmRfY29sb3I6IFwiI2ZmZmZmZlwiLFxyXG4gIHRoZW1lX2NvbG9yOiBcIiNmZmZmZmZcIixcclxuICBvcmllbnRhdGlvbiA6IFwicG9ydHJhaXRcIixcclxuICBkZXNjcmlwdGlvbiA6IFwiVGhlLUNhdGFseXN0XCIsXHJcblxyXG4gIGljb25zIDpbXHJcbiAgICB7XHJcbiAgICAgIFwic3JjXCI6IFwiZmF2aWNvbi0xNngxNi5wbmdcIiwgXHJcbiAgICAgIFwic2l6ZXNcIjogXCIxNngxNlwiLFxyXG4gICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIFwic3JjXCI6IFwiZmF2aWNvbi0zMngzMi5wbmdcIiwgXHJcbiAgICAgIFwic2l6ZXNcIjogXCIzMngzMlwiLFxyXG4gICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBcInNyY1wiOiBcImFuZHJvaWQtaWNvbi0xNDR4MTQ0LnBuZ1wiLFxyXG4gICAgICBcInNpemVzXCI6IFwiMTQ0eDE0NFwiLFxyXG4gICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcclxuICAgICAgXCJwcnVwb3NlXCI6IFwiYW55XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIHtcclxuICAgICAgXCJzcmNcIjogXCJhbmRyb2lkLWljb24tMTkyeDE5Mi5wbmdcIixcclxuICAgICAgXCJzaXplc1wiOiBcIjE5MngxOTJcIixcclxuICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgIFwicHVycG9zZVwiOiBcIm1hc2thYmxlXCJcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICBcInNyY1wiOiBcImFuZHJvaWQtY2hyb21lLTUxMng1MTIucG5nXCIsXHJcbiAgICAgIFwic2l6ZXNcIjogXCI1MTJ4NTEyXCIsXHJcbiAgICAgIFwidHlwZVwiOiBcImltYWdlL3BuZ1wiXHJcbiAgICB9XHJcbiAgXVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGJhc2U6IFwiLi9cIixcclxuICAvLyBzZXJ2ZXIgOntcclxuICAvLyAgIHByb3h5OntcclxuICAvLyAgICAgJy9hcGknOiB7XHJcbiAgLy8gICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9zZWN1cmUubXlmZWVzLmxrJyxcclxuICAvLyAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgLy8gICAgICAgcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcvYXBpL3NjaC9wYXltZW50cycpLFxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIFxyXG4gIC8vICAgICAgIGNvbmZpZ3VyZTogKHByb3h5LCBvcHRpb25zKSA9PiB7XHJcbiAgLy8gICAgICAgICBwcm94eS5vbignZXJyb3InLCAoZXJyLCByZXEsIHJlcykgPT4ge1xyXG4gIC8vICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIHByb3h5Lm9uKCdwcm94eVJlcScsIChwcm94eVJlcSwgcmVxLCByZXMpID0+IHtcclxuICAvLyAgICAgICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgUmVxdWVzdCB0byB0aGUgVGFyZ2V0OicsIHJlcS5tZXRob2QsIHJlcS51cmwpO1xyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBwcm94eS5vbigncHJveHlSZXMnLCAocHJveHlSZXMsIHJlcSwgcmVzKSA9PiB7XHJcbiAgLy8gICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCBSZXNwb25zZSBmcm9tIHRoZSBUYXJnZXQ6JywgcHJveHlSZXMuc3RhdHVzQ29kZSwgcmVxLnVybCk7XHJcblxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgfSxcclxuICAvLyAgICAgfSxcclxuICAgIFxyXG4gIC8vICAgfVxyXG4gIC8vIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0EgKHtcclxuICAgICAgbWFuaWZlc3QgOiBtYW5pZmVzdEZvclBsdWdpbixcclxuXHJcbiAgICB9KSxcclxuICAgIFxyXG4gIF0sXHJcblxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1PLFNBQVMsb0JBQW9CO0FBQ2hRLE9BQU8sV0FBVztBQUNsQixTQUFTLGVBQWU7QUFHeEIsSUFBTSxvQkFBb0I7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixZQUFZO0FBQUEsRUFDWixXQUFXO0FBQUEsRUFDWCxPQUFPO0FBQUEsRUFDUCxTQUFTO0FBQUEsRUFDVCxrQkFBa0I7QUFBQSxFQUNsQixhQUFhO0FBQUEsRUFDYixhQUFjO0FBQUEsRUFDZCxhQUFjO0FBQUEsRUFFZCxPQUFPO0FBQUEsSUFDTDtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsSUFDVjtBQUFBLElBRUE7QUFBQSxNQUNFLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFFQTtBQUFBLE1BQ0UsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2I7QUFBQSxJQUVBO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFFRjtBQUtBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUEwQk4sU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUztBQUFBLE1BQ1AsVUFBVztBQUFBLElBRWIsQ0FBQztBQUFBLEVBRUg7QUFFRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
