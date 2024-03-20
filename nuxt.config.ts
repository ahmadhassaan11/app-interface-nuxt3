// https://nuxt.com/docs/api/configuration/nuxt-config
//assets:"/<rootDir>/assets",
import {resolve} from "path";
export default defineNuxtConfig({
  alias:{
    "@":resolve(__dirname,"/"),
  },
  css: ["~/assets/main.css"],
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
