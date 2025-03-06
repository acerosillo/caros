import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
// import vercelServerless from "@astrojs/vercel/serverless";
//import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
 // output: "server",
 output: "static", // Ensures a static build for deployment
 build: {
   outDir: "dist" // Explicitly sets output to 'dist'
 }
 // adapter: vercel(),
});
