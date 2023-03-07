// vite.config.ts
import { resolve } from "node:path";
import react from "file:///C:/Users/jedrz/PROJEKTY/instant/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/jedrz/PROJEKTY/instant/node_modules/vite/dist/node/index.js";
import dts from "file:///C:/Users/jedrz/PROJEKTY/instant/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///C:/Users/jedrz/PROJEKTY/instant/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///C:/Users/jedrz/PROJEKTY/instant/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "16.8.0 || >=17.x",
  "react-dom": "16.8.0 || >=17.x"
};

// vite.config.ts
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/lib/"]
    })
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setup-tests.ts"
  },
  build: {
    lib: {
      entry: resolve("src", "lib/index.ts"),
      name: "InstantLibrary",
      formats: ["es", "umd"],
      fileName: (format) => `instant-library.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcamVkcnpcXFxcUFJPSkVLVFlcXFxcaW5zdGFudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcamVkcnpcXFxcUFJPSkVLVFlcXFxcaW5zdGFudFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvamVkcnovUFJPSkVLVFkvaW5zdGFudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcblxyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcclxuaW1wb3J0IHRzQ29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocydcclxuY29uc3QgeyBFc0xpbnRlciwgbGludGVyUGx1Z2luIH0gPSBFc0xpbnRcclxuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoY29uZmlnRW52KSA9PiAoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB0c0NvbmZpZ1BhdGhzKCksXHJcbiAgICBsaW50ZXJQbHVnaW4oe1xyXG4gICAgICBpbmNsdWRlOiBbJy4vc3JjfS8qKi8qLnt0cyx0c3h9J10sXHJcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxyXG4gICAgfSksXHJcbiAgICBkdHMoe1xyXG4gICAgICBpbmNsdWRlOiBbJ3NyYy9saWIvJ10sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHRlc3Q6IHtcclxuICAgIGdsb2JhbHM6IHRydWUsXHJcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcclxuICAgIHNldHVwRmlsZXM6ICcuL3NldHVwLXRlc3RzLnRzJ1xyXG4gIH0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2xpYi9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnSW5zdGFudExpYnJhcnknLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxyXG4gICAgICBmaWxlTmFtZTogKGZvcm1hdCkgPT4gYGluc3RhbnQtbGlicmFyeS4ke2Zvcm1hdH0uanNgLFxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzKV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKSIsICJ7XHJcbiAgXCJuYW1lXCI6IFwiaW5zdGFudC1saWJyYXJ5XCIsXHJcbiAgXCJwcml2YXRlXCI6IGZhbHNlLFxyXG4gIFwidmVyc2lvblwiOiBcIjAuMC40XCIsXHJcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXHJcbiAgXCJzY3JpcHRzXCI6IHtcclxuICAgIFwiZGV2XCI6IFwidml0ZVwiLFxyXG4gICAgXCJidWlsZFwiOiBcInRzYyAmJiB2aXRlIGJ1aWxkXCIsXHJcbiAgICBcInByZXZpZXdcIjogXCJ2aXRlIHByZXZpZXdcIixcclxuICAgIFwibGludFwiOiBcImVzbGludCAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxyXG4gICAgXCJsaW50OmZpeFwiOiBcImVzbGludCAtLWZpeCAnc3JjLyoqLyoue2pzeCx0cyx0c3h9J1wiLFxyXG4gICAgXCJmb3JtYXRcIjogXCJwcmV0dGllciAtLXdyaXRlIHNyYy8vKiovKi57dHMsdHN4LGNzc30gLS1jb25maWcgLi8ucHJldHRpZXJyY1wiLFxyXG4gICAgXCJwcmVwYXJlXCI6IFwiaHVza3kgaW5zdGFsbFwiLFxyXG4gICAgXCJ0ZXN0XCI6IFwidml0ZXN0XCIsXHJcbiAgICBcImNvdmVyYWdlXCI6IFwidml0ZXN0IHJ1biAtLWNvdmVyYWdlXCJcclxuICB9LFxyXG4gIFwiaHVza3lcIjoge1xyXG4gICAgXCJob29rc1wiOiB7XHJcbiAgICAgIFwicHJlLWNvbW1pdFwiOiBcImxpbnQtc3RhZ2VkXCJcclxuICAgIH1cclxuICB9LFxyXG4gIFwibGludC1zdGFnZWRcIjoge1xyXG4gICAgXCJzcmMvKiovKi57anMsanN4LHRzLHRzeH1cIjogW1xyXG4gICAgICBcInlhcm4gZXNsaW50XCIsXHJcbiAgICAgIFwieWFybiBmb3JtYXRcIlxyXG4gICAgXVxyXG4gIH0sXHJcbiAgXCJmaWxlc1wiOiBbXHJcbiAgICBcImRpc3RcIlxyXG4gIF0sXHJcbiAgXCJleHBvcnRzXCI6IHtcclxuICAgIFwiLlwiOiB7XHJcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L2luc3RhbnQtbGlicmFyeS5lcy5qc1wiLFxyXG4gICAgICBcInJlcXVpcmVcIjogXCIuL2Rpc3QvaW5zdGFudC1saWJyYXJ5LnVtZC5qc1wiXHJcbiAgICB9LFxyXG4gICAgXCIuL2Rpc3Qvc3R5bGUuY3NzXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiXHJcbiAgfSxcclxuICBcIm1haW5cIjogXCIuL2Rpc3QvaW5zdGFudC1saWJyYXJ5LnVtZC5qc1wiLFxyXG4gIFwibW9kdWxlXCI6IFwiLi9kaXN0L2luc3RhbnQtbGlicmFyeS5lcy5qc1wiLFxyXG4gIFwidHlwZXNcIjogXCIuL2Rpc3QvaW5kZXguZC50c1wiLFxyXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcclxuICAgIFwicmVhY3RcIjogXCJeMTguMi4wXCIsXHJcbiAgICBcInJlYWN0LWRvbVwiOiBcIl4xOC4yLjBcIlxyXG4gIH0sXHJcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xyXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L2plc3QtZG9tXCI6IFwiXjUuMTYuNVwiLFxyXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjE0LjAuMFwiLFxyXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0LWhvb2tzXCI6IFwiXjguMC4xXCIsXHJcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvdXNlci1ldmVudFwiOiBcIl4xNC40LjNcIixcclxuICAgIFwiQHR5cGVzL25vZGVcIjogXCJeMTguMTQuNlwiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMC4yN1wiLFxyXG4gICAgXCJAdHlwZXMvcmVhY3QtZG9tXCI6IFwiXjE4LjAuMTBcIixcclxuICAgIFwiQHR5cGVzY3JpcHQtZXNsaW50L2VzbGludC1wbHVnaW5cIjogXCJeNS41NC4wXCIsXHJcbiAgICBcIkB0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJcIjogXCJeNS41NC4wXCIsXHJcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiXjMuMS4wXCIsXHJcbiAgICBcImVzbGludFwiOiBcIl44LjM1LjBcIixcclxuICAgIFwiZXNsaW50LWNvbmZpZy1wcmV0dGllclwiOiBcIl44LjYuMFwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLWltcG9ydFwiOiBcIl4yLjI3LjVcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1qc3gtYTExeVwiOiBcIl42LjcuMVwiLFxyXG4gICAgXCJlc2xpbnQtcGx1Z2luLXByZXR0aWVyXCI6IFwiXjQuMi4xXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3RcIjogXCJeNy4zMi4yXCIsXHJcbiAgICBcImVzbGludC1wbHVnaW4tcmVhY3QtaG9va3NcIjogXCJeNC42LjBcIixcclxuICAgIFwiZXNsaW50LXBsdWdpbi1zaW1wbGUtaW1wb3J0LXNvcnRcIjogXCJeMTAuMC4wXCIsXHJcbiAgICBcImh1c2t5XCI6IFwiXjguMC4zXCIsXHJcbiAgICBcImpzZG9tXCI6IFwiXjIxLjEuMFwiLFxyXG4gICAgXCJsaW50LXN0YWdlZFwiOiBcIl4xMy4xLjJcIixcclxuICAgIFwicHJldHRpZXJcIjogXCJeMi44LjRcIixcclxuICAgIFwicmVhY3QtaG9va3NcIjogXCJeMS4wLjFcIixcclxuICAgIFwidHlwZXNjcmlwdFwiOiBcIl40LjkuNVwiLFxyXG4gICAgXCJ2aXRlXCI6IFwiXjQuMS40XCIsXHJcbiAgICBcInZpdGUtcGx1Z2luLWR0c1wiOiBcIl4yLjAuMlwiLFxyXG4gICAgXCJ2aXRlLXBsdWdpbi1saW50ZXJcIjogXCJeMi4wLjJcIixcclxuICAgIFwidml0ZS10c2NvbmZpZy1wYXRoc1wiOiBcIl40LjAuNVwiLFxyXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4yOS4yXCJcclxuICB9LFxyXG4gIFwicGVlckRlcGVuZGVuY2llc1wiOiB7XHJcbiAgICBcInJlYWN0XCI6IFwiMTYuOC4wIHx8ID49MTcueFwiLFxyXG4gICAgXCJyZWFjdC1kb21cIjogXCIxNi44LjAgfHwgPj0xNy54XCJcclxuICB9LFxyXG4gIFwicmVwb3NpdG9yeVwiOiB7XHJcbiAgICBcInR5cGVcIjogXCJnaXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3JhbmppOTQvaW5zdGFudFwiXHJcbiAgfSxcclxuICBcImtleXdvcmRzXCI6IFtdLFxyXG4gIFwiYXV0aG9yXCI6IFwicmFuamk5NFwiLFxyXG4gIFwiYnVnc1wiOiB7XHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9yYW5qaTk0L2luc3RhbnQvaXNzdWVzXCJcclxuICB9LFxyXG4gIFwiaG9tZXBhZ2VcIjogXCJodHRwczovL2dpdGh1Yi5jb20vcmFuamk5NC9pbnN0YW50I3JlYWRtZVwiLFxyXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiXHJcbn1cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5UixTQUFTLGVBQWU7QUFFalQsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxtQkFBbUI7OztBQ3FFeEIsdUJBQW9CO0FBQUEsRUFDbEIsT0FBUztBQUFBLEVBQ1QsYUFBYTtBQUNmOzs7QUR2RUYsSUFBTSxFQUFFLFVBQVUsYUFBYSxJQUFJO0FBR25DLElBQU8sc0JBQVEsYUFBYSxDQUFDLGVBQWU7QUFBQSxFQUMxQyxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsTUFDWCxTQUFTLENBQUMsc0JBQXNCO0FBQUEsTUFDaEMsU0FBUyxDQUFDLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQUEsSUFDdkMsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVU7QUFBQSxJQUN0QixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxPQUFPLGNBQWM7QUFBQSxNQUNwQyxNQUFNO0FBQUEsTUFDTixTQUFTLENBQUMsTUFBTSxLQUFLO0FBQUEsTUFDckIsVUFBVSxDQUFDLFdBQVcsbUJBQW1CO0FBQUEsSUFDM0M7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBaUIsZ0JBQWdCLENBQUM7QUFBQSxJQUN6RDtBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
