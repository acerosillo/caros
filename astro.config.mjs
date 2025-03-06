import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
// import vercelServerless from "@astrojs/vercel/serverless";
//import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
 // output: "server",
 output: "server", // Ensures a static build for deployment
 build: {
   outDir: "dist" // Explicitly sets output to 'dist'
 },
 adapter: netlify(),
 // adapter: vercel(),
});
