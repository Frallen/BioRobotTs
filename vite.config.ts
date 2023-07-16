import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from "unplugin-vue-components/vite"
import * as path from "path";
import VitePluginSVGSpritemap from '@spiriit/vite-plugin-svg-spritemap'

// https://vitejs.dev/config/

export default defineConfig({
    server: {
        port: 3000
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    plugins: [
        vue(),
        VitePluginSVGSpritemap('./src/assets/svg/*.svg',{
            output:{
                filename:"[name][extname]"
            }
        }),
        Components({
            dirs: ['./src/components',"./src/pages"],
            dts: true
        }),
        AutoImport({
            dts: true,
            vueTemplate: true,
            dirs: [
                './src/store',
                './src/types',
                './src/composables' // only root modules
                // './composables/**', // all nested modules
            ],
            imports: [
                "vue",
                '@vueuse/core',
                {
                    "pinia": [
                        'storeToRefs',
                        // automatically imports `defineStore`
                        "defineStore", // import { defineStore } from 'pinia'
                        // automatically imports `defineStore` as `definePiniaStore`
                        ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
                    ]
                }
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@/assets/styles/_var.scss" ;@import "@/assets/styles/_mixins.scss" ;`,
            },
        },
    },
})
